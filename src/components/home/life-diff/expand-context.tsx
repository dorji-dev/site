import type { HiddenContext } from "@/lib/life-diff";
import { UnfoldIcon } from "@primer/octicons-react";
import DiffLine from "@/components/home/life-diff/diff-line";

type ExpandContextProps = {
  hidden: HiddenContext;
  expanded: boolean;
  selectedLine: string | null;
  onToggle: () => void;
  onSelectLine: (id: string) => void;
  copiedLine: string | null;
  onCopyLink: (id: string) => void;
};

const ExpandContext = ({
  hidden,
  expanded,
  selectedLine,
  onToggle,
  onSelectLine,
  copiedLine,
  onCopyLink,
}: ExpandContextProps) => {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        className="flex w-full items-center gap-2 bg-diff-hunk px-3 py-1.5 text-left font-mono text-xs text-diff-hunk-text hover:bg-diff-hunk-hover"
      >
        <UnfoldIcon size={16} />
        {expanded ? "Collapse hidden lines" : hidden.label}
      </button>
      {expanded
        ? hidden.lines.map((line) => (
            <DiffLine
              key={line.id}
              line={line}
              selected={selectedLine === line.id}
              onSelect={() => onSelectLine(line.id)}
              copied={copiedLine === line.id}
              onCopyLink={() => onCopyLink(line.id)}
            />
          ))
        : null}
    </div>
  );
};

export default ExpandContext;
