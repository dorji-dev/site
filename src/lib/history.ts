import { getAvailability, profile } from "@/lib/profile";

// Inline `code` spans in titles and bodies render as branch/ref pills.

export type Commit = {
  sha: string;
  message: string;
  body?: string;
  href?: string;
  stars?: number;
};

export type HistoryEvent =
  | {
      id: string;
      kind: "branch" | "merge";
      when: string;
      title: string;
      body: string;
      href?: string;
    }
  | {
      id: string;
      kind: "commits";
      when: string;
      commits: Commit[];
    }
  | {
      id: string;
      kind: "head";
      when: string;
      title: string;
      body: string;
      href?: string;
    };

const buildHistory = (
  availability: ReturnType<typeof getAvailability>,
): HistoryEvent[] => [
  {
    id: "checkout",
    kind: "branch",
    when: "late 2019",
    title: "branched `frontend` off `mechanical`",
    body: `A government scholarship took me to ${profile.education.school} for mechanical engineering. College showed me C and I barely understood it. I left, came home to ${profile.hometown}, and started over.`,
  },
  {
    id: "self-taught",
    kind: "commits",
    when: "2020 – 2021",
    commits: [
      {
        sha: "c0ffee1",
        message: "chore: start over with C, then Java and Python",
      },
      {
        sha: "3eb0a1d",
        message: "feat: HTML → CSS → JavaScript → React",
      },
      {
        sha: "5ac4d1b",
        message: "test: data-structure drills on HackerRank",
        body: "Arrays, stacks, queues, linked lists — in JavaScript and Python.",
        href: "https://github.com/dorji-tshering/problemsolving",
      },
      {
        sha: "ca1c001",
        message: "feat: first React app — a scientific calculator",
        body: "No BEDMAS. Brackets work, though.",
        href: "https://react-cal-one.vercel.app",
      },
      {
        sha: "7a9e60d",
        message: "feat: first mobile app, built in a week",
        body: "React Native: record, edit and share 60-second videos.",
        href: "https://github.com/dorji-tshering/VideoSharingApp",
      },
    ],
  },
  {
    id: "clones",
    kind: "commits",
    when: "2022",
    commits: [
      {
        sha: "f33d5e2",
        message: "feat: a Twitter clone on GetStream activity feeds",
        href: "https://github.com/dorji-tshering/chit-chat",
      },
      {
        sha: "b0a2d51",
        message: "feat: flash cards with Next.js and Firebase",
        href: "https://github.com/dorji-tshering/flash-card",
      },
      {
        sha: "16a9ec1",
        message: "feat: an Instagram clone with real-time updates",
        body: "Kept shipping small things until the work felt real.",
        href: "https://github.com/dorji-tshering/ig-clone",
      },
    ],
  },
  {
    id: "selise",
    kind: "merge",
    when: "Apr 2023",
    title: `merged into \`${profile.previousCompany.name}\``,
    body: `${profile.previousCompany.role} in ${profile.city}, after almost three years of teaching myself.`,
    href: profile.previousCompany.url,
  },
  {
    id: "selise-work",
    kind: "commits",
    when: "2023 – 2025",
    commits: [
      {
        sha: "9e7a5c3",
        message: "feat: Next.js products for clients",
      },
      {
        sha: "a9b1e20",
        message: "refactor: rebuild an internal tool for Migros, Switzerland",
        body: "Learned Angular the honest way — by shipping with it.",
      },
      {
        sha: "3a1d0c4",
        message: "docs: App Router patterns, in one repo",
        body: "Infinite scroll, parallel and intercepting routes, streaming.",
        href: "https://github.com/dorji-dev/next_app",
        stars: 34,
      },
      {
        sha: "f0e1a7b",
        message: "docs: Formik vs React Hook Form, side by side",
        href: "https://github.com/dorji-dev/formik-vs-react-hook-form",
        stars: 25,
      },
    ],
  },
  {
    id: "jaggle",
    kind: "merge",
    when: "late 2025",
    title: `merged into \`${profile.company.name}\``,
    body: "A project workspace where tasks, docs, goals and calendars share one thread.",
    href: profile.company.url,
  },
  {
    id: "jaggle-work",
    kind: "commits",
    when: "late 2025 – 2026",
    commits: [
      {
        sha: "b7e2c01",
        message: "feat: List, Kanban, Gantt and Sprint views",
        body: "Kept the boards fast on modest devices.",
        href: profile.company.url,
      },
    ],
  },
  {
    id: "head",
    kind: "head",
    when: availability.historyWhen,
    title: "tagged `open-to-work`",
    body: `${availability.started ? "Left" : "Leaving"} ${profile.company.name}. Open to frontend roles — remote, or here in Bhutan.`,
  },
];

export const getHistory = () => buildHistory(getAvailability());

export const commitCount = getHistory().reduce(
  (count, event) =>
    count + (event.kind === "commits" ? event.commits.length : 1),
  0,
);
