import { getAvailability, philosophy, profile } from "@/lib/profile";

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

// Character width of the padded `key:` column; wrapped values indent to it.
export const KEY_COLUMN = KEY_WIDTH + 2;

const del = (
  id: string,
  key: string,
  value: string,
  options: { paired?: boolean; href?: string } = {},
): LineDraft => ({ id, kind: "del", key, value, paired: true, ...options });

const add = (
  id: string,
  key: string,
  value: string,
  options: { paired?: boolean; href?: string } = {},
): LineDraft => ({ id, kind: "add", key, value, ...options });

const ctx = (id: string, key: string, value: string): LineDraft =>
  ({ id, kind: "ctx", key, value });

const getDrafts = (): HunkDraft[] => [
  {
    id: "whoami",
    label: "whoami",
    lines: [
      ctx("from", "from", `${profile.hometown}, Bhutan`),
      del("studied-old", "studied", "mechanical engineering"),
      add("studied-new", "studied", "to code, mostly by myself", { paired: true }),
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
      del("writes-old", "writes", "C, Java, Python"),
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
      del("team-old", "team", profile.previousCompany.name, {
        href: profile.previousCompany.url,
      }),
      add("team-new", "team", profile.company.name, {
        paired: true,
        href: profile.company.url,
      }),
      add("shipped", "shipped", "the frontend of a project workspace"),
    ],
    notes: ["aiUnderstand", "aiTest"],
  },
  {
    id: "now",
    label: "now",
    lines: [
      add("status", "status", "open to work"),
      add("from", "from", getAvailability().diffFrom),
    ],
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

const build = () => {
  const drafts = getDrafts();
  const noteKeys = drafts.flatMap((hunk) => hunk.notes ?? []);
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
        { text: `${draft.key}:`.padEnd(KEY_COLUMN) },
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

export const getLifeDiff = () => {
  const { hunks, additions, deletions } = build();

  return {
    path: "life.yml",
    additions,
    deletions,
    hunks,
  };
};
