import SectionHeading from "@/components/home/section-heading";
import { profile } from "@/lib/profile";

const Bio = () => {
  const calculator = profile.firstProject.url ? (
    <a
      href={profile.firstProject.url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
    >
      {profile.firstProject.name}
    </a>
  ) : (
    profile.firstProject.name
  );

  return (
    <section className="space-y-4">
      <SectionHeading label="bio" />
      <div className="space-y-4 text-[17px] leading-[1.65] text-foreground/90">
        <p>
          I&apos;m a self-taught frontend engineer from {profile.hometown}. I
          work at{" "}
          <a
            href={profile.company.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
          >
            {profile.company.name}
          </a>
          . {profile.yearsLearning}+ years of learning and making things;{" "}
          {profile.yearsProfessional}+ of those as a professional.
        </p>
        <p>
          A government scholarship took me to {profile.education.school} for{" "}
          {profile.education.program}. I left in late 2019 and came home. College
          had shown me C — I barely understood it. So I started over: small
          problems in C, then HTML, CSS, JavaScript, and React. My first web app
          was {calculator}. I kept shipping small projects until the work felt
          real.
        </p>
        <p>
          After almost three years of teaching myself, I joined{" "}
          {profile.previousCompany.name} — Next.js products, and a full revamp
          of an internal tool for Swiss Migros where I learned Angular for the
          first time by building with it. In late 2025 I moved to{" "}
          {profile.company.name} for a new challenge.
        </p>
        <p>{profile.enjoyment}</p>
        <p>I care about clean code and interfaces that stay out of the way.</p>
      </div>
    </section>
  );
};

export default Bio;
