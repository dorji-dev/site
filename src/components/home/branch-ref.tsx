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

// Renders `backtick` segments of a string as branch refs.
export const RefText = ({ text }: { text: string }) => {
  return (
    <>
      {text.split("`").map((part, index) =>
        index % 2 === 1 ? (
          <BranchRef key={part}>{part}</BranchRef>
        ) : (
          part
        ),
      )}
    </>
  );
};
