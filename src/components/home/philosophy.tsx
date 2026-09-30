import SectionHeading from "@/components/home/section-heading";
import { philosophy } from "@/lib/profile";

const Philosophy = () => {
  return (
    <section className="space-y-3 border-b border-neutral-200 pb-8">
      <SectionHeading label="philosophy" />
      <ul className="list-disc space-y-2 pl-5 text-base leading-7 marker:text-neutral-400">
        {philosophy.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </section>
  );
};

export default Philosophy;
