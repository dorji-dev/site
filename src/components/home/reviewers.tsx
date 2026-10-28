import SectionLabel from "@/components/home/section-label";
import { connectLinks } from "@/lib/profile";

const joinLabel = (index: number, total: number) => {
  if (index === total - 1) {
    return "";
  }

  if (index === total - 2) {
    return " or ";
  }

  return ", ";
};

const Reviewers = () => {
  return (
    <section id="remotes" className="scroll-mt-8 pt-20 sm:pt-28">
      <SectionLabel>git remote -v</SectionLabel>
      <p className="mt-4 font-display text-[clamp(2rem,6vw,3.4rem)] leading-[1.05] tracking-[-0.03em] text-ink">
        Open to work. Ping me on{" "}
        {connectLinks.map((link, index) => (
          <span key={link.id}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-ink underline-offset-[0.12em] hover:decoration-mist"
            >
              {link.label}
            </a>
            {joinLabel(index, connectLinks.length)}
          </span>
        ))}
        .
      </p>
    </section>
  );
};

export default Reviewers;
