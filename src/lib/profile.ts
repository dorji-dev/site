const MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365.25;

const yearsSince = (isoDate: string) =>
  Math.floor((Date.now() - new Date(isoDate).getTime()) / MS_PER_YEAR);

// Midnight 1 Nov 2026 in Bhutan (BTT, UTC+6).
const AVAILABLE_FROM_MS = Date.parse("2026-11-01T00:00:00+06:00");
const AVAILABLE_FROM_LABEL = "1 Nov 2026";
const AVAILABLE_FROM_LONG = "1 November 2026";

export const getAvailability = () => {
  const started = Date.now() >= AVAILABLE_FROM_MS;

  return {
    started,
    label: AVAILABLE_FROM_LABEL,
    long: AVAILABLE_FROM_LONG,
    headerWhen: started ? "now" : `from ${AVAILABLE_FROM_LABEL}`,
    checkDetail: started ? "available now" : `from ${AVAILABLE_FROM_LABEL}`,
    mergeDetail: started
      ? "Available now, remote or here in Bhutan."
      : `Available from ${AVAILABLE_FROM_LONG}, remote or here in Bhutan.`,
    historyWhen: started ? "now" : `from ${AVAILABLE_FROM_LABEL}`,
    diffFrom: started ? "now" : AVAILABLE_FROM_LABEL,
    description: started
      ? "Self-taught frontend engineer from Trashigang, based in Thimphu, Bhutan. Open to work."
      : `Self-taught frontend engineer from Trashigang, based in Thimphu, Bhutan. Open to work from ${AVAILABLE_FROM_LONG}.`,
  };
};

export const profile = {
  name: "Dorji Tshering",
  handle: "dorji-dev",
  location: "Thimphu, Bhutan",
  city: "Thimphu",
  hometown: "Trashigang",
  yearsLearning: yearsSince("2020-07-01"),
  yearsProfessional: yearsSince("2023-04-07"),
  company: {
    name: "Jaggle.AI",
    url: "https://jaggle.ai",
  },
  previousCompany: {
    name: "SELISE Bhutan",
    role: "Associate Frontend Engineer",
    url: "https://selisegroup.com",
  },
  education: {
    school: "NIT Kurukshetra, India",
  },
  image: {
    src: "/dorji.jpg",
    alt: "Dorji Tshering",
  },
};

export const philosophy = {
  users:
    "Design and build for the people who will use it — that alone surfaces better feedback than polishing in isolation.",
  composable:
    "Prefer composable code: small pieces that combine cleanly beat clever one-offs.",
  aiUnderstand:
    "Use AI, but stay in the driver's seat. If you can't explain the change, the next edit will feel like a black hole.",
  aiTest:
    "Don't skip manual testing because the model \"looks right.\" You'll be surprised what still breaks.",
} as const;

export const connectLinks = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/dorji-dev",
  },
  {
    id: "x",
    label: "X",
    href: "https://x.com/dorji__",
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/share/1CmMsS1W82/",
  },
] as const;
