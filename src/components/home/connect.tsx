import SectionHeading from "@/components/home/section-heading";
import { connectLinks } from "@/lib/profile";

const Connect = () => {
  return (
    <section className="space-y-3">
      <SectionHeading label="connect" />
      <nav className="flex flex-wrap gap-x-5 gap-y-1 text-base">
        {connectLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-950"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </section>
  );
};

export default Connect;
