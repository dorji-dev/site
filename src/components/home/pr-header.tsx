import Image from "next/image";
import { GitPullRequestIcon, RepoIcon } from "@primer/octicons-react";
import { BranchRef } from "@/components/home/branch-ref";
import { commitCount } from "@/lib/history";
import { getAvailability, profile } from "@/lib/profile";

const PrHeader = () => {
  const availability = getAvailability();

  return (
    <section className="pt-16 sm:pt-24">
      <p className="flex items-center gap-2 font-mono text-sm text-mist">
        <RepoIcon size={16} />
        <span>
          {profile.handle} / <span className="text-ink">life</span>
        </span>
        <span aria-hidden className="text-line">
          ·
        </span>
        <span>#2019</span>
      </p>
      <h1 className="mt-5 font-display text-[clamp(2.4rem,6.6vw,4.35rem)] leading-[0.96] tracking-[-0.03em] text-ink">
        refactor: mechanical <span className="italic">→</span> frontend
      </h1>
      <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm text-mist">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-success-emphasis px-3 py-1 font-medium text-white">
          <GitPullRequestIcon size={16} />
          Open
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Image
            src={profile.image.src}
            alt=""
            width={20}
            height={20}
            className="size-5 rounded-full object-cover ring-1 ring-line"
          />
          <span className="font-medium text-ink">dorji</span>
        </span>
        <span>
          wants to merge{" "}
          <span className="font-medium text-ink">{commitCount} commits</span>{" "}
          into <BranchRef>main</BranchRef> from <BranchRef>frontend</BranchRef>
        </span>
      </div>
      <p className="mt-8 max-w-2xl text-base leading-7 text-ink sm:text-lg sm:leading-8">
        Self-taught frontend engineer from {profile.hometown}, now based in{" "}
        {profile.location}. I walked away from mechanical engineering in 2019,
        taught myself C, Java, Python, and the web — HTML, CSS, JavaScript,
        React — and have been
        shipping for {profile.yearsProfessional} years.{" "}
        {availability.started ? "I left" : "I'm leaving"}{" "}
        <a
          href={profile.company.url}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-line underline-offset-4 hover:decoration-ink"
        >
          {profile.company.name}
        </a>
        {availability.started
          ? " and I'm open to work."
          : ` and I'm open to work from ${availability.long}.`}
      </p>
    </section>
  );
};

export default PrHeader;
