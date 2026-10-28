import { CheckCircleFillIcon, CheckIcon, LockIcon } from "@primer/octicons-react";
import SectionLabel from "@/components/home/section-label";
import { getAvailability, profile } from "@/lib/profile";

export const getChecks = () => {
  const availability = getAvailability();

  return [
    {
      id: "self-taught",
      name: "self-taught",
      detail: `${profile.yearsLearning} years, since mid-2020`,
    },
    {
      id: "shipping",
      name: "ci / shipping",
      detail: `${profile.yearsProfessional} years in production`,
    },
    {
      id: "manual-testing",
      name: "manual-testing",
      detail: "still run by hand, every time",
    },
    {
      id: "open-to-work",
      name: "open-to-work",
      detail: availability.checkDetail,
    },
  ] as const;
};

const MergeBox = () => {
  const checks = getChecks();
  const availability = getAvailability();

  return (
    <section id="checks" className="scroll-mt-8 pt-16">
      <SectionLabel>checks</SectionLabel>
      <div className="mt-6 overflow-hidden rounded-lg border border-line">
        <div className="flex items-start gap-3 px-4 py-4">
          <span className="mt-0.5 text-success">
            <CheckCircleFillIcon size={20} />
          </span>
          <div>
            <p className="font-medium text-ink">All checks have passed</p>
            <p className="text-sm text-mist">
              {checks.length} successful checks
            </p>
          </div>
        </div>
        <ul className="divide-y divide-line border-y border-line bg-surface text-sm">
          {checks.map((check) => (
            <li
              key={check.id}
              className="flex flex-wrap items-center gap-x-3 gap-y-0.5 px-4 py-2.5"
            >
              <span className="text-success">
                <CheckIcon size={16} />
              </span>
              <span className="font-mono text-ink">{check.name}</span>
              <span className="text-mist">— {check.detail}</span>
            </li>
          ))}
        </ul>
        <div className="flex items-start gap-3 px-4 py-4">
          <span className="mt-0.5 text-success">
            <CheckCircleFillIcon size={20} />
          </span>
          <div>
            <p className="font-medium text-ink">
              This branch has no conflicts with the base branch
            </p>
            <p className="text-sm text-mist">
              From {profile.hometown}, based in {profile.city}.{" "}
              {availability.mergeDetail}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 border-t border-line bg-surface px-4 py-4">
          <span className="mt-0.5 text-mist">
            <LockIcon size={20} />
          </span>
          <div>
            <p className="font-medium text-ink">Only dorji can merge this</p>
            <p className="text-sm text-mist">
              This diff is read-only. You can still reach out below.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MergeBox;
