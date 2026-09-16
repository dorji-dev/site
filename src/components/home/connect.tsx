import SectionHeading from "@/components/home/section-heading";
import { connectLinks } from "@/lib/profile";

const Connect = () => {
  return (
    <section className="space-y-4">
      <SectionHeading label="connect" />
      <nav className="flex flex-wrap gap-x-5 gap-y-2 text-[15px]">
        {connectLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/85 underline decoration-transparent underline-offset-4 transition-colors hover:text-accent hover:decoration-accent/50"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </section>
  );
};

export default Connect;
