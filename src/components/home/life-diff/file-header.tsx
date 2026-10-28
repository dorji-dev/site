import { CommentIcon, FileIcon } from "@primer/octicons-react";

type FileHeaderProps = {
  path: string;
  additions: number;
  deletions: number;
  notesHidden: boolean;
  viewed: boolean;
  onToggleNotes: () => void;
  onToggleViewed: () => void;
};

const FileHeader = ({
  path,
  additions,
  deletions,
  notesHidden,
  viewed,
  onToggleNotes,
  onToggleViewed,
}: FileHeaderProps) => {
  return (
    <div className="sticky top-0 z-10 flex flex-col gap-3 border-b border-line bg-diff-header px-3 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:px-4">
      <div className="flex min-w-0 flex-wrap items-center gap-2 font-mono text-sm">
        <span className="text-mist">
          <FileIcon size={16} />
        </span>
        <span className="font-medium text-ink">{path}</span>
        <span className="text-success">+{additions}</span>
        <span className="text-danger">−{deletions}</span>
      </div>
      <div className="flex flex-wrap items-center gap-3 text-sm">
        <label className="flex cursor-pointer items-center gap-2 text-mist hover:text-ink">
          <input
            type="checkbox"
            checked={viewed}
            onChange={onToggleViewed}
            className="size-3.5 rounded border-line accent-success-emphasis"
          />
          Viewed
        </label>
        <button
          type="button"
          onClick={onToggleNotes}
          aria-pressed={!notesHidden}
          className="inline-flex items-center gap-1.5 rounded-md px-1.5 py-0.5 text-mist hover:bg-background hover:text-ink"
        >
          <CommentIcon size={16} />
          {notesHidden ? "Show notes" : "Hide notes"}
        </button>
      </div>
    </div>
  );
};

export default FileHeader;
