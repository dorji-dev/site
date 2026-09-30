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
    <h2 className="text-sm font-medium text-neutral-500">
      {labels[label]}
    </h2>
  );
};

export default SectionHeading;
