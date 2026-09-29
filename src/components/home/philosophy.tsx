import SectionHeading from "@/components/home/section-heading";
import { philosophy } from "@/lib/profile";

const Philosophy = () => {
  return (
    <section className="space-y-3 border-b border-ink/30 pb-8">
      <SectionHeading label="philosophy" />
      <ul className="sand-copy space-y-2">
        {philosophy.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </section>
  );
};

export default Philosophy;
