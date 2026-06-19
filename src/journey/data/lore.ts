export type LoreEntry = {
  title: string;
  summary: string;
  deep?: string;
};

export const loreEntries: Record<string, LoreEntry> = {
  "physics-notebook": {
    title: "Physics notebook",
    summary:
      "I enjoyed physics and math at Tashitse Higher Secondary School. I wanted to be a cosmologist and would leave my friends feeling hopeless with existential what-ifs.",
    deep: "I had no idea what coding even meant. Graduated class 12 in 2016 as school topper with 4 HM certificates — but the stars mattered more than software.",
  },
};
