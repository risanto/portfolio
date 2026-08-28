export type Project = {
  slug: string;
  name: string;
  summary: string;
  detail: string;
  stack: string[];
  image?: { src: string; alt: string };
  metric?: { label: string; value: string; kind: 'add' | 'del' };
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: 'ios-gowes',
    name: 'iOS Prototype — Gowes',
    summary: 'A native SwiftUI app built during Apple Developer Academy.',
    detail:
      'Gowes helps cyclists estimate pollution exposure based on their route, duration, and departure time using spatio-temporal model.',
    stack: ['SwiftUI', 'MapKit', 'CoreML'],
    image: { src: '/img/gowes.png', alt: 'Gowes app screenshot' },
    links: [
      {
        label: 'Demo video',
        href: 'https://youtube.com/shorts/jEBoGlyrjgk?feature=share',
      },
    ],
  },
  {
    slug: 'ios-datemate',
    name: 'iOS Prototype — Datemate',
    summary: 'A native SwiftUI app built during Apple Developer Academy.',
    detail: 'Datemate helps couples decide where to go for a date based on their preferences.',
    stack: ['SwiftUI', 'Foundation Model', 'GameKit'],
    image: { src: '/img/datemate.png', alt: 'Datemate app screenshot' },
    links: [
      {
        label: 'Demo video',
        href: 'https://youtube.com/shorts/Or-MWtZM2Z0?feature=share',
      },
    ],
  },
  {
    slug: 'blog-migration',
    name: 'HSB Blog Migration',
    summary: 'Migrated the company blog to a new template, solo.',
    detail:
      'Migrated the company blog to a new template as the sole developer, rebuilding it for performance — improving PageSpeed scores to 91 on mobile and 99 on desktop.',
    stack: ['WordPress'],
    metric: { label: 'PageSpeed (mobile)', value: '91', kind: 'add' },
    links: [
      {
        label: 'Live site',
        href: 'https://hsbinvestasi.com/blog',
      },
    ],
  },
];

export type LogEntry = {
  range: string;
  role: string;
  org: string;
  location: string;
  diff: { kind: 'add' | 'del'; text: string }[];
};

export const log: LogEntry[] = [
  {
    range: '2026 — present',
    role: 'iOS Development',
    org: 'Apple Developer Academy',
    location: 'Tangerang, ID',
    diff: [
      { kind: 'add', text: 'SwiftUI + UIKit across 7 prototypes' },
      { kind: 'add', text: 'UX research: interviews, usability testing' },
    ],
  },
  {
    range: '2024 — 2025',
    role: 'Web Developer',
    org: 'HSB Investasi',
    location: 'Jakarta, ID',
    diff: [
      { kind: 'add', text: 'Sole dev: site, blog, landing pages' },
      { kind: 'add', text: 'Blog migration — 91 mobile / 99 desktop' },
    ],
  },
  {
    range: '2022 — 2023',
    role: 'Frontend Engineer',
    org: 'Great Connection System',
    location: 'Singapore (remote)',
    diff: [
      { kind: 'add', text: 'Dashboards: energy usage, bookings' },
      { kind: 'add', text: 'Next.js, Tailwind, Ant Design, FusionCharts' },
    ],
  },
  {
    range: '2021 — 2022',
    role: 'Full Stack Engineer',
    org: 'FinAccel (Kredivo)',
    location: 'Jakarta, ID',
    diff: [
      { kind: 'add', text: 'Internal tools for lending + merchant onboarding' },
      { kind: 'add', text: 'React, Next.js, GraphQL, Docker' },
    ],
  },
  {
    range: '2020 — 2021',
    role: 'Full Stack JavaScript Instructor',
    org: 'Hacktiv8',
    location: 'Jakarta, ID',
    diff: [
      { kind: 'add', text: 'Taught JS fundamentals + REST APIs' },
      { kind: 'add', text: 'Reviewed daily challenges & live code' },
    ],
  },
];

export const social = [
  { label: 'GitHub', href: 'https://github.com/risanto' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/risantomulyo' },
];
