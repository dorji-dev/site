const labels = {
  bio: "Bio",
  now: "Now",
  philosophy: "Philosophy",
  connect: "Connect",
} as const;

type SectionHeadingProps = {
  label: keyof typeof labels;
};

const SectionHeading = ({ label }: SectionHeadingProps) => {
  return (
    <h2 className="font-display text-[2.6rem] leading-none text-ink sm:text-5xl">
      {labels[label]}
    </h2>
  );
};

export default SectionHeading;
