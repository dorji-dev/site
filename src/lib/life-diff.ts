import { philosophy, profile } from "@/lib/profile";

export type DiffMark = "add" | "del";

export type DiffToken = {
  text: string;
  mark?: DiffMark;
  href?: string;
};

export type DiffLine = {
  id: string;
  kind: "add" | "del" | "ctx";
  oldNo: number | null;
  newNo: number | null;
  tokens: DiffToken[];
};

export type ReviewNote = {
  id: string;
  index: number;
  total: number;
  body: string;
};

export type HiddenContext = {
  id: string;
  label: string;
  lines: DiffLine[];
};

export type DiffHunk = {
  id: string;
  header: string;
  lines: DiffLine[];
  notes: ReviewNote[];
  after?: HiddenContext;
};

type LineDraft = {
  id: string;
  kind: DiffLine["kind"];
  key: string;
  value: string;
  // Highlight the value as the changed words of a -/+ pair.
  paired?: boolean;
  href?: string;
};

type HunkDraft = {
  id: string;
  label: string;
  lines: LineDraft[];
  notes?: (keyof typeof philosophy)[];
  after?: LineDraft[];
};

const KEY_WIDTH = 9;

const del = (id: string, key: string, value: string, paired = true): LineDraft =>
  ({ id, kind: "del", key, value, paired });

const add = (
  id: string,
  key: string,
  value: string,
  options: { paired?: boolean; href?: string } = {},
): LineDraft => ({ id, kind: "add", key, value, ...options });

const ctx = (id: string, key: string, value: string): LineDraft =>
  ({ id, kind: "ctx", key, value });

const drafts: HunkDraft[] = [
  {
    id: "whoami",
    label: "whoami",
    lines: [
      ctx("from", "from", `${profile.hometown}, Bhutan`),
      del("studied-old", "studied", "mechanical engineering"),
      add("studied-new", "studied", "the web, mostly by myself", { paired: true }),
      del("based-old", "based", "Kurukshetra, India"),
      add("based-new", "based", profile.location, { paired: true }),
    ],
    after: [
      ctx("learning", "learning", `${profile.yearsLearning} years`),
      ctx("shipping", "shipping", `${profile.yearsProfessional} years`),
    ],
  },
  {
    id: "stack",
    label: "stack",
    lines: [
      del("writes-old", "writes", "C (barely)"),
      add("writes-new", "writes", "TypeScript, React, Next.js, Angular", {
        paired: true,
      }),
      add("styles", "styles", "CSS, Tailwind"),
    ],
    notes: ["composable"],
  },
  {
    id: "work",
    label: "work",
    lines: [
      del("team-old", "team", profile.previousCompany.name),
      add("team-new", "team", profile.company.name, {
        paired: true,
        href: profile.company.url,
      }),
      add("ships", "ships", "the frontend of a project workspace"),
    ],
    notes: ["aiUnderstand", "aiTest"],
  },
  {
    id: "cares",
    label: "cares",
    lines: [
      ctx("focus", "focus", "making slow interfaces feel fast"),
      ctx("cares", "cares", "clean code, interfaces that stay out of the way"),
    ],
    notes: ["users"],
  },
];

const noteKeys = drafts.flatMap((hunk) => hunk.notes ?? []);

const build = () => {
  let oldNo = 0;
  let newNo = 0;
  let additions = 0;
  let deletions = 0;

  const toLine = (draft: LineDraft): DiffLine => {
    const mark = draft.paired && draft.kind !== "ctx" ? draft.kind : undefined;

    if (draft.kind === "add") additions += 1;
    if (draft.kind === "del") deletions += 1;

    return {
      id: draft.id,
      kind: draft.kind,
      oldNo: draft.kind === "add" ? null : ++oldNo,
      newNo: draft.kind === "del" ? null : ++newNo,
      tokens: [
        { text: `${draft.key}:`.padEnd(KEY_WIDTH + 2) },
        { text: draft.value, mark, href: draft.href },
      ],
    };
  };

  const hunks = drafts.map((draft): DiffHunk => {
    const oldStart = oldNo + 1;
    const newStart = newNo + 1;
    const lines = draft.lines.map(toLine);
    const oldCount = lines.filter((line) => line.kind !== "add").length;
    const newCount = lines.filter((line) => line.kind !== "del").length;
    const hidden = draft.after?.map(toLine);

    return {
      id: draft.id,
      header: `@@ -${oldStart},${oldCount} +${newStart},${newCount} @@ ${draft.label}`,
      lines,
      notes: (draft.notes ?? []).map((key) => ({
        id: key,
        index: noteKeys.indexOf(key) + 1,
        total: noteKeys.length,
        body: philosophy[key],
      })),
      after: hidden
        ? {
            id: `${draft.id}-more`,
            label: `Expand ${hidden.length} ${hidden.length === 1 ? "line" : "lines"}`,
            lines: hidden,
          }
        : undefined,
    };
  });

  return { hunks, additions, deletions };
};

const { hunks, additions, deletions } = build();

export const lifeDiff = {
  path: "life.yml",
  additions,
  deletions,
  sha: "2019c0d",
  base: "mechanical",
  head: "frontend",
  hunks,
};
