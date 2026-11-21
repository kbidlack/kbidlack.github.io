export const site = {
  name: "Kavi Bidlack",
  url: "https://kbidlack.github.io",
  host: "kbidlack.github.io",
  email: "kbidlack@duck.com",
};

export const socials = [
  {
    label: "github",
    href: "https://github.com/kbidlack",
    color: "gray",
    icon: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  },
  {
    label: "linkedin",
    href: "https://linkedin.com/in/kbidlack",
    color: "#0e8dcf",
    icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "scholar",
    href: "https://scholar.google.com/citations?user=IPylmOkAAAAJ",
    color: "var(--keyword)",
    icon: "M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z",
  },
  {
    label: "orcid",
    href: "https://orcid.org/0009-0007-4897-6968",
    color: "var(--accent)",
    icon: "M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.516.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z",
  },
];

export type Description = string | (string | { label: string; href: string })[];

export const projects: {
  name: string;
  sub: string;
  href: string;
  description: Description;
}[] = [
  {
    name: "proxhy",
    sub: "hypixel proxy",
    href: "https://github.com/proxhyhq/proxhy",
    description: [
      "A Python-based Minecraft 1.8.9 proxy for Hypixel enabling real-time player statistics, customizable gameplay enhancements, and peer-to-peer game broadcasting. Built around a custom modular plugin architecture and supported by a suite of in-house, open-source networking and protocol ",
      {
        label: "libraries",
        href: "https://github.com/proxhyhq/proxhy#libraries",
      },
      ".",
    ],
  },
  {
    name: "pyroh",
    sub: "p2p quic wrapper",
    href: "https://github.com/kbidlack/pyroh",
    description:
      "An asyncio-compatible Python wrapper for the iroh p2p networking library, built using PyO3.",
  },
  {
    name: "kbidlack.github.io",
    sub: "portfolio",
    href: "https://kbidlack.github.io",
    description: "This is where you are right now!",
  },
];

export const work: {
  when: string;
  title: string;
  org: string;
  description: Description;
}[] = [
  {
    when: "2026 - Present",
    title: "Undergraduate Research Intern",
    org: "Lawrence Berkeley National Laboratory",
    description: [
      "Researching and developing quantum compilers with the ",
      { label: "BQSKit", href: "https://bqskit.lbl.gov" },
      " team at LBNL.",
    ],
  },
];

export const publications = [
  {
    title:
      "Students as Citizen Scientists: Observations and Measurements of 43 Exoplanet Targets",
    venue:
      "Journal of the American Association of Variable Star Observers, vol. 52, no. 2, p. 225",
    date: "2024-12",
    when: "Dec 2024",
    href: "https://scixplorer.org/abs/2024JAVSO..52..225P/abstract",
    note: "Contributed exoplanet observations as part of a student collaboration.",
  },
  {
    title: "Quantifying Isochrone Fit Accuracy",
    venue:
      "Society for Astronomical Sciences, Symposium on Telescope Science, vol. 43, p. 26",
    date: "2024-06",
    when: "Jun 2024",
    href: "https://ui.adsabs.harvard.edu/abs/2024SASS%E2%80%A643...26B/abstract",
    note: "Symposium poster on a Python-based method for weight matrix calculations in star cluster isochrone fitting.",
  },
  {
    title:
      "Astrometric Measurements of Double Star Systems HEI 915, GRV 719, STI 2170, and RST 2531",
    venue: "Journal of Double Star Observations, vol. 20, no. 2, pp. 275–284",
    date: "2024-04",
    when: "Apr 2024",
    href: "https://www.jdso.org/volume20/number2/Bowman_275_284.pdf",
  },
];
