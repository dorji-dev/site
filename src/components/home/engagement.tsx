"use client";

import { useEffect, useState } from "react";

const formatCount = (value: number) =>
  new Intl.NumberFormat("en").format(value);

type VisitCounts = {
  views: number;
};

const Engagement = () => {
  const [views, setViews] = useState<number | null>(null);
  const [failed, setFailed] = useState(false);

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
          setViews(data.views);
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

  const viewsLabel = views !== null ? formatCount(views) : failed ? "—" : "…";

  return (
    <footer className="mt-10">
      <p className="text-sm text-neutral-500">
        <span className="tabular-nums">{viewsLabel}</span> views
      </p>
    </footer>
  );
};

export default Engagement;
