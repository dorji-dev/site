import { CheckIcon, LinkIcon } from "@primer/octicons-react";
import {
  KEY_COLUMN,
  type DiffLine as DiffLineData,
  type DiffToken,
} from "@/lib/life-diff";

// Hanging indent: wrapped values line up under the value, not the key.
const hangingIndent = {
  paddingLeft: `${KEY_COLUMN}ch`,
  textIndent: `-${KEY_COLUMN}ch`,
};

type DiffLineProps = {
  line: DiffLineData;
  selected: boolean;
  onSelect: () => void;
  copied: boolean;
  onCopyLink: () => void;
};

const tokenClass = (token: DiffToken) => {
  if (token.mark === "add") {
    return "rounded-sm bg-diff-add-word";
  }

  if (token.mark === "del") {
    return "rounded-sm bg-diff-del-word";
  }

  return undefined;
};

const DiffTokens = ({ tokens }: { tokens: DiffToken[] }) => {
  return (
    <>
      {tokens.map((token) => {
        const className = tokenClass(token);

        if (token.href) {
          return (
            <a
              key={`${token.text}-${token.href}`}
              href={token.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`underline decoration-current/30 underline-offset-2 hover:decoration-current ${className ?? ""}`}
            >
              {token.text}
            </a>
          );
        }

        return (
          <span key={token.text} className={className}>
            {token.text}
          </span>
        );
      })}
    </>
  );
};

const signFor = (kind: DiffLineData["kind"]) => {
  if (kind === "add") {
    return "+";
  }

  if (kind === "del") {
    return "−";
  }

  return " ";
};

const rowClass = (kind: DiffLineData["kind"], selected: boolean) => {
  if (selected) {
    return "bg-diff-select";
  }

  if (kind === "add") {
    return "bg-diff-add";
  }

  if (kind === "del") {
    return "bg-diff-del";
  }

  return "bg-background";
};

const numClass = (kind: DiffLineData["kind"], selected: boolean) => {
  if (selected) {
    return "bg-diff-select text-mist";
  }

  if (kind === "add") {
    return "bg-diff-add-num text-mist";
  }

  if (kind === "del") {
    return "bg-diff-del-num text-mist";
  }

  return "text-mist";
};

const DiffLine = ({
  line,
  selected,
  copied,
  onSelect,
  onCopyLink,
}: DiffLineProps) => {
  return (
    <div
      id={line.id}
      className={`group relative grid grid-cols-[2rem_1rem_minmax(0,1fr)] text-[13px] leading-6 sm:grid-cols-[2.5rem_2.5rem_1.15rem_minmax(0,1fr)] sm:text-sm ${rowClass(line.kind, selected)}`}
    >
      <button
        type="button"
        onClick={onSelect}
        className={`hidden items-start justify-end font-mono tabular-nums sm:flex ${numClass(line.kind, selected)} pr-2`}
        aria-label={`Select old line ${line.oldNo ?? "none"}`}
      >
        {line.oldNo ?? ""}
      </button>
      <button
        type="button"
        onClick={onSelect}
        className={`flex items-start justify-end font-mono tabular-nums ${numClass(line.kind, selected)} pr-1.5 sm:pr-2`}
        aria-label={`Select line ${line.newNo ?? line.oldNo ?? line.id}`}
      >
        <span className="sm:hidden">{line.newNo ?? line.oldNo ?? ""}</span>
        <span className="hidden sm:inline">{line.newNo ?? ""}</span>
      </button>
      <span aria-hidden className="font-mono text-mist">
        {signFor(line.kind)}
      </span>
      <p
        className="min-w-0 pr-3 font-mono whitespace-pre-wrap text-ink [overflow-wrap:anywhere]"
        style={hangingIndent}
      >
        <DiffTokens tokens={line.tokens} />
      </p>
      <button
        type="button"
        onClick={onCopyLink}
        className={`absolute top-1/2 left-0.5 hidden size-5 -translate-y-1/2 items-center justify-center rounded border border-line bg-background text-accent shadow-sm sm:flex sm:group-hover:opacity-100 sm:focus-visible:opacity-100 ${copied ? "opacity-100" : "opacity-0"}`}
        aria-label={copied ? "Link copied" : "Copy link to this line"}
        title={copied ? "Copied" : "Copy link to this line"}
      >
        {copied ? <CheckIcon size={12} /> : <LinkIcon size={12} />}
      </button>
    </div>
  );
};

export default DiffLine;
