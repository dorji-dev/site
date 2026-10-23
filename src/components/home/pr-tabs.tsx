import {
  ChecklistIcon,
  FileDiffIcon,
  GitCommitIcon,
  GlobeIcon,
  type Icon,
} from "@primer/octicons-react";
import { checks } from "@/components/home/merge-box";
import { commitCount } from "@/lib/history";
import { connectLinks } from "@/lib/profile";

type Tab = {
  href: string;
  label: string;
  count?: number;
  icon: Icon;
};

const tabs: Tab[] = [
  { href: "#commits", label: "Commits", count: commitCount, icon: GitCommitIcon },
  { href: "#files", label: "Files changed", count: 1, icon: FileDiffIcon },
  { href: "#checks", label: "Checks", count: checks.length, icon: ChecklistIcon },
  { href: "#remotes", label: "Remotes", count: connectLinks.length, icon: GlobeIcon },
];

const PrTabs = () => {
  return (
    <nav
      aria-label="Sections"
      className="mt-10 -mx-5 overflow-x-auto border-b border-line px-5 sm:mx-0 sm:px-0"
    >
      <ul className="flex min-w-max gap-1 text-sm">
        {tabs.map(({ href, label, count, icon: TabIcon }) => (
          <li key={href}>
            <a
              href={href}
              className="-mb-px flex items-center gap-2 border-b-2 border-transparent px-3 py-2.5 text-mist hover:border-line hover:text-ink"
            >
              <TabIcon size={16} />
              <span>{label}</span>
              {count !== undefined ? (
                <span className="rounded-full bg-surface px-1.5 text-xs leading-5 text-ink tabular-nums ring-1 ring-line">
                  {count}
                </span>
              ) : null}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PrTabs;
