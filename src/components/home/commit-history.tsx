import {
  GitBranchIcon,
  GitCommitIcon,
  GitMergeIcon,
  LinkExternalIcon,
  StarIcon,
  TagIcon,
} from "@primer/octicons-react";
import { RefText } from "@/components/home/branch-ref";
import SectionLabel from "@/components/home/section-label";
import { history, type Commit, type HistoryEvent } from "@/lib/history";

type MilestoneEvent = Exclude<HistoryEvent, { kind: "commits" }>;

const badgeClass: Record<MilestoneEvent["kind"], string> = {
  branch: "bg-surface text-mist ring-line",
  merge: "bg-done text-white ring-done",
  head: "bg-success-emphasis text-white ring-success-emphasis",
};

const badgeIcon = {
  branch: GitBranchIcon,
  merge: GitMergeIcon,
  head: TagIcon,
};

const CommitMessage = ({ message }: { message: string }) => {
  const [type, ...rest] = message.split(": ");

  return (
    <>
      <span className="font-mono text-[0.92em] text-mist">{type}:</span>{" "}
      {rest.join(": ")}
    </>
  );
};

const CommitRow = ({ commit }: { commit: Commit }) => {
  const message = <CommitMessage message={commit.message} />;

  return (
    <li className="flex items-start justify-between gap-4 px-4 py-3">
      <div className="min-w-0">
        <p className="text-[15px] leading-6 text-ink">
          {commit.href ? (
            <a
              href={commit.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent hover:underline hover:underline-offset-4"
            >
              {message}
            </a>
          ) : (
            message
          )}
        </p>
        {commit.body ? (
          <p className="mt-0.5 text-sm leading-6 text-mist">{commit.body}</p>
        ) : null}
      </div>
      <div className="flex shrink-0 items-center gap-3 pt-0.5 text-xs text-mist">
        {commit.stars ? (
          <span
            className="inline-flex items-center gap-1 tabular-nums"
            aria-label={`${commit.stars} GitHub stars`}
          >
            <StarIcon size={14} />
            {commit.stars}
          </span>
        ) : null}
        <span className="hidden rounded-md px-1.5 py-0.5 font-mono ring-1 ring-line sm:inline">
          {commit.sha}
        </span>
        {commit.href ? (
          <a
            href={commit.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
            aria-label="Open link"
          >
            <LinkExternalIcon size={14} />
          </a>
        ) : null}
      </div>
    </li>
  );
};

const Milestone = ({ event }: { event: MilestoneEvent }) => {
  const BadgeIcon = badgeIcon[event.kind];

  return (
    <li className="relative flex gap-4 pb-8">
      <span
        className={`relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full ring-1 ${badgeClass[event.kind]}`}
      >
        <BadgeIcon size={16} />
      </span>
      <div className="min-w-0 pt-1">
        <p className="text-[15px] leading-6 text-ink">
          <span className="font-medium">dorji</span>{" "}
          {event.href ? (
            <a
              href={event.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:underline-offset-4"
            >
              <RefText text={event.title} />
            </a>
          ) : (
            <RefText text={event.title} />
          )}{" "}
          <span className="text-sm text-mist">· {event.when}</span>
          {event.kind === "head" ? (
            <span className="ml-2 rounded-full px-2 py-0.5 align-middle font-mono text-xs text-success ring-1 ring-success">
              HEAD
            </span>
          ) : null}
        </p>
        <p className="mt-1 max-w-xl text-sm leading-6 text-mist sm:text-[15px]">
          {event.body}
        </p>
      </div>
    </li>
  );
};

const CommitGroup = ({
  event,
}: {
  event: Extract<HistoryEvent, { kind: "commits" }>;
}) => {
  return (
    <li className="relative pb-8">
      <div className="flex items-center gap-4">
        <span className="relative z-10 flex size-8 shrink-0 items-center justify-center bg-background text-mist">
          <GitCommitIcon size={16} />
        </span>
        <p className="text-sm text-mist">
          {event.commits.length} commits · {event.when}
        </p>
      </div>
      <ol className="mt-2 divide-y divide-line overflow-hidden rounded-lg border border-line bg-background sm:ml-12">
        {event.commits.map((commit) => (
          <CommitRow key={commit.sha} commit={commit} />
        ))}
      </ol>
    </li>
  );
};

const CommitHistory = () => {
  return (
    <section id="commits" className="scroll-mt-8 pt-12">
      <SectionLabel aside="git log --graph">history</SectionLabel>
      <ol className="relative mt-6 before:absolute before:top-2 before:bottom-10 before:left-[15.5px] before:w-px before:bg-line">
        {history.map((event) =>
          event.kind === "commits" ? (
            <CommitGroup key={event.id} event={event} />
          ) : (
            <Milestone key={event.id} event={event} />
          ),
        )}
      </ol>
    </section>
  );
};

export default CommitHistory;
