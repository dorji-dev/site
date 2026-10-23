const MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365.25;

const yearsSince = (isoDate: string) =>
  Math.floor((Date.now() - new Date(isoDate).getTime()) / MS_PER_YEAR);

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
  },
  education: {
    school: "NIT Kurukshetra, India",
    program: "B.Tech Mechanical Engineering",
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
