type SectionLabelProps = {
  children: string;
  aside?: string;
};

const SectionLabel = ({ children, aside }: SectionLabelProps) => {
  return (
    <div className="flex items-baseline justify-between gap-4 font-mono text-sm text-mist">
      <h2>{children}</h2>
      {aside ? <p className="hidden sm:block">{aside}</p> : null}
    </div>
  );
};

export default SectionLabel;
