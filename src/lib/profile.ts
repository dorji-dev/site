const MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365.25;

const yearsSince = (isoDate: string) =>
  Math.floor((Date.now() - new Date(isoDate).getTime()) / MS_PER_YEAR);

export const profile = {
  name: "Dorji Tshering",
  handle: "@dorji-dev",
  role: "Frontend Engineer · Trashigang, Bhutan",
  location: "Trashigang, Bhutan",
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
  },
  education: {
    school: "NIT Kurukshetra, India",
    program: "B.Tech Mechanical Engineering",
  },
  firstProject: {
    name: "a basic React calculator",
    // Paste the repo URL when ready.
    url: null as string | null,
  },
  links: {
    github: "https://github.com/dorji-dev",
    x: "https://x.com/DorjiBolt",
    facebook: "https://www.facebook.com/share/1CmMsS1W82/",
  },
  image: {
    src: "/dorji.jpg",
    alt: "Dorji Tshering",
  },
  now: "Shipping the frontend for Jaggle.AI's project management tool.",
  enjoyment:
    "What I enjoy most: making slow interfaces feel fast — lean React renders, virtualized lists, dense boards that still scroll smoothly on modest devices.",
  postedAt: "2026-09-16",
  post: {
    network: "dorji.dev",
    kind: "post",
    postedFrom: "Trashigang",
  },
};

export const philosophy = [
  {
    id: "users",
    text: "Design and build for the people who will use it — that alone surfaces better feedback than polishing in isolation.",
  },
  {
    id: "composable",
    text: "Prefer composable code: small pieces that combine cleanly beat clever one-offs.",
  },
  {
    id: "ai-understand",
    text: "Use AI, but stay in the driver's seat. If you can't explain the change, the next edit will feel like a black hole.",
  },
  {
    id: "ai-test",
    text: "Don't skip manual testing because the model \"looks right.\" You'll be surprised what still breaks.",
  },
] as const;

export const connectLinks = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/dorji-dev",
  },
  {
    id: "x",
    label: "X",
    href: "https://x.com/DorjiBolt",
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/share/1CmMsS1W82/",
  },
] as const;
