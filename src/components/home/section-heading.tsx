const sectionTones = {
  bio: "section-tone-bio",
  now: "section-tone-now",
  philosophy: "section-tone-philosophy",
  connect: "section-tone-connect",
} as const;

type SectionTone = keyof typeof sectionTones;

type SectionHeadingProps = {
  label: SectionTone;
};

const SectionHeading = ({ label }: SectionHeadingProps) => {
  return (
    <h2
      className={`font-mono text-[12px] font-medium tracking-normal ${sectionTones[label]}`}
    >
      <span aria-hidden>#</span> <span className="lowercase">{label}</span>
    </h2>
  );
};

export default SectionHeading;
