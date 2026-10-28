type BranchRefProps = {
  children: string;
};

export const BranchRef = ({ children }: BranchRefProps) => {
  return (
    <code className="rounded-md bg-diff-hunk px-1.5 py-0.5 font-mono text-[0.85em] text-accent">
      {children}
    </code>
  );
};

type RefTextProps = {
  text: string;
  href?: string;
};

// Renders `backtick` segments of a string as branch refs.
export const RefText = ({ text, href }: RefTextProps) => {
  return (
    <>
      {text.split("`").map((part, index) => {
        if (index % 2 !== 1) {
          return part;
        }

        if (!href) {
          return <BranchRef key={part}>{part}</BranchRef>;
        }

        return (
          <a
            key={part}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:underline-offset-4"
          >
            <BranchRef>{part}</BranchRef>
          </a>
        );
      })}
    </>
  );
};
