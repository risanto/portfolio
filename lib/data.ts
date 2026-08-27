export type Project = {
  slug: string;
  name: string;
  summary: string;
  detail: string;
  stack: string[];
  metric?: { label: string; value: string; kind: "add" | "del" };
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "cooken",
    name: "Cooken",
    summary: "Search recipes by the ingredients you already have.",
    detail:
      "A recipe-discovery app built to relearn React and the Context API, pulling from a third-party recipe API. Designed the UI in Figma end to end.",
    stack: ["React", "Express.js", "PostgreSQL", "Sequelize", "Tailwind"],
    links: [
      { label: "Live site", href: "https://example.com" },
      { label: "GitHub", href: "https://github.com/your-username/cooken" },
    ],
  },
  {
    slug: "blog-migration",
    name: "HSB Blog Migration",
    summary: "Rebuilt the company blog on a new stack, solo.",
    detail:
      "Migrated the company blog to a new template and stack as the sole developer, focusing on load performance and SEO continuity.",
    stack: ["Nuxt.js", "TypeScript", "Supabase", "Flowbite"],
    metric: { label: "PageSpeed (mobile)", value: "91", kind: "add" },
    links: [{ label: "Case study", href: "#" }],
  },
  {
    slug: "ios-prototype",
    name: "iOS Prototype — Academy",
    summary: "A native SwiftUI app built during Apple Developer Academy.",
    detail:
      "One of seven SwiftUI/UIKit prototypes built across solo and team challenges, shaped by user interviews and usability testing.",
    stack: ["SwiftUI", "UIKit"],
    links: [{ label: "Demo (GIF)", href: "#" }],
  },
];

export type LogEntry = {
  range: string;
  role: string;
  org: string;
  location: string;
  diff: { kind: "add" | "del"; text: string }[];
};

export const log: LogEntry[] = [
  {
    range: "2026 — present",
    role: "iOS Development Programme",
    org: "Apple Developer Academy",
    location: "Tangerang, ID",
    diff: [
      { kind: "add", text: "SwiftUI + UIKit across 7 prototypes" },
      { kind: "add", text: "UX research: interviews, usability testing" },
    ],
  },
  {
    range: "2024 — 2025",
    role: "Web Developer",
    org: "HSB Investasi",
    location: "Jakarta, ID",
    diff: [
      { kind: "add", text: "Sole dev: site, blog, landing pages" },
      { kind: "add", text: "Blog migration — 91 mobile / 99 desktop" },
    ],
  },
  {
    range: "2022 — 2023",
    role: "Frontend Engineer",
    org: "Great Connection System",
    location: "Singapore (remote)",
    diff: [
      { kind: "add", text: "Dashboards: energy usage, bookings" },
      { kind: "add", text: "Next.js, Tailwind, Ant Design, FusionCharts" },
    ],
  },
  {
    range: "2021 — 2022",
    role: "Full Stack Engineer",
    org: "FinAccel (Kredivo)",
    location: "Jakarta, ID",
    diff: [
      { kind: "add", text: "Internal tools for lending + merchant onboarding" },
      { kind: "add", text: "React, Next.js, GraphQL, Docker" },
    ],
  },
  {
    range: "2020 — 2021",
    role: "Full Stack JavaScript Instructor",
    org: "Hacktiv8",
    location: "Jakarta, ID",
    diff: [
      { kind: "add", text: "Taught JS fundamentals + REST APIs" },
      { kind: "add", text: "Reviewed daily challenges & live code" },
    ],
  },
];

export const social = [
  { label: "GitHub", href: "https://github.com/your-username" },
  { label: "LinkedIn", href: "https://linkedin.com/in/your-username" },
  { label: "Email", href: "mailto:you@example.com" },
];
