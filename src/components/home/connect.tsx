import SectionHeading from "@/components/home/section-heading";
import { connectLinks } from "@/lib/profile";

const Connect = () => {
  return (
    <section className="space-y-3">
      <SectionHeading label="connect" />
      <nav className="sand-copy flex flex-wrap gap-x-5 gap-y-1">
        {connectLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="sand-link"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </section>
  );
};

export default Connect;
