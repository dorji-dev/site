"use client";

import { useEffect, useState } from "react";

const formatCount = (value: number) =>
  new Intl.NumberFormat("en", { notation: "compact" }).format(value);

type VisitCounts = {
  views: number;
  unique: number;
  youAre: number | null;
  loves: number;
  loved: boolean;
};

const Engagement = () => {
  const [visits, setVisits] = useState<VisitCounts | null>(null);
  const [failed, setFailed] = useState(false);
  const [lovePending, setLovePending] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const record = async () => {
      try {
        const response = await fetch("/api/visits", { method: "POST" });
        if (!response.ok) {
          throw new Error("Visit request failed");
        }

        const data = (await response.json()) as VisitCounts;
        if (!cancelled) {
          setVisits(data);
        }
      } catch {
        if (!cancelled) {
          setFailed(true);
        }
      }
    };

    void record();

    return () => {
      cancelled = true;
    };
  }, []);

  const onToggleLove = async () => {
    if (!visits || lovePending) {
      return;
    }

    setLovePending(true);

    try {
      const response = await fetch("/api/loves", { method: "POST" });
      if (!response.ok) {
        throw new Error("Love request failed");
      }

      const data = (await response.json()) as Pick<
        VisitCounts,
        "loves" | "loved"
      >;
      setVisits((current) =>
        current
          ? {
              ...current,
              loves: data.loves,
              loved: data.loved,
            }
          : current,
      );
    } catch {
      setFailed(true);
    } finally {
      setLovePending(false);
    }
  };

  const viewsLabel = visits ? formatCount(visits.views) : failed ? "—" : "…";
  const uniqueLabel = visits ? formatCount(visits.unique) : failed ? "—" : "…";
  const youAreLabel = visits?.youAre
    ? formatCount(visits.youAre)
    : failed
      ? "—"
      : "…";
  const lovesLabel = visits ? formatCount(visits.loves) : failed ? "—" : "…";

  return (
    <footer className="space-y-3 border-t border-rule pt-3">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={onToggleLove}
          disabled={!visits || lovePending}
          aria-pressed={visits?.loved ?? false}
          className="inline-flex items-center gap-2 border border-rule px-3 py-2 font-mono text-[11px] tracking-wide transition-colors enabled:hover:border-accent enabled:hover:text-accent disabled:opacity-50"
        >
          <svg
            aria-hidden
            viewBox="0 0 16 16"
            className={`size-3.5 ${visits?.loved ? "fill-accent text-accent" : "fill-none stroke-current"}`}
            strokeWidth="1.5"
          >
            <path d="M8 13.5s-5.2-3.2-5.2-6.4A2.9 2.9 0 0 1 8 5.1a2.9 2.9 0 0 1 5.2 2 6.2 6.2 0 0 1-5.2 6.4Z" />
          </svg>
          <span className={visits?.loved ? "text-accent" : "text-muted"}>
            love
          </span>
          <span className="tabular-nums text-foreground">{lovesLabel}</span>
        </button>

        <p className="font-mono text-[11px] tracking-wide text-muted">
          <span className="tabular-nums text-foreground/70">{viewsLabel}</span>{" "}
          views
          <span className="mx-2 text-foreground/15" aria-hidden>
            ·
          </span>
          <span className="tabular-nums text-foreground/70">{uniqueLabel}</span>{" "}
          unique
          <span className="mx-2 text-foreground/15" aria-hidden>
            ·
          </span>
          you #{youAreLabel}
        </p>
      </div>
    </footer>
  );
};

export default Engagement;
