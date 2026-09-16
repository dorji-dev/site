import SectionHeading from "@/components/home/section-heading";
import { philosophy } from "@/lib/profile";

const Philosophy = () => {
  return (
    <section className="space-y-4">
      <SectionHeading label="philosophy" />
      <ul className="space-y-3 text-[17px] leading-[1.65] text-foreground/90">
        {philosophy.map((item) => (
          <li key={item.id} className="flex gap-3">
            <span
              aria-hidden
              className="mt-[0.7em] size-1 shrink-0 rounded-full bg-accent"
            />
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Philosophy;
