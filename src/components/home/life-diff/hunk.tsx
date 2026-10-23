import type { DiffHunk } from "@/lib/life-diff";
import DiffLine from "@/components/home/life-diff/diff-line";
import ExpandContext from "@/components/home/life-diff/expand-context";
import ReviewThread from "@/components/home/life-diff/review-note";

type HunkProps = {
  hunk: DiffHunk;
  notesHidden: boolean;
  expandedIds: ReadonlySet<string>;
  selectedLine: string | null;
  onSelectLine: (id: string) => void;
  onToggleExpand: (id: string) => void;
  copiedLine: string | null;
  onCopyLink: (id: string) => void;
  onOpenPhoto: () => void;
};

const Hunk = ({
  hunk,
  notesHidden,
  expandedIds,
  selectedLine,
  onSelectLine,
  onToggleExpand,
  copiedLine,
  onCopyLink,
  onOpenPhoto,
}: HunkProps) => {
  const hidden = hunk.after;

  return (
    <section>
      {hunk.header ? (
        <p className="bg-diff-hunk px-3 py-1 font-mono text-xs text-diff-hunk-text sm:px-4">
          {hunk.header}
        </p>
      ) : null}
      {hunk.lines.map((line) => (
        <DiffLine
          key={line.id}
          line={line}
          selected={selectedLine === line.id}
          onSelect={() => onSelectLine(line.id)}
          copied={copiedLine === line.id}
          onCopyLink={() => onCopyLink(line.id)}
        />
      ))}
      {hunk.notes.length > 0 && !notesHidden ? (
        <ReviewThread notes={hunk.notes} onOpenPhoto={onOpenPhoto} />
      ) : null}
      {hidden ? (
        <ExpandContext
          hidden={hidden}
          expanded={expandedIds.has(hidden.id)}
          selectedLine={selectedLine}
          onToggle={() => onToggleExpand(hidden.id)}
          onSelectLine={onSelectLine}
          copiedLine={copiedLine}
          onCopyLink={onCopyLink}
        />
      ) : null}
    </section>
  );
};

export default Hunk;
