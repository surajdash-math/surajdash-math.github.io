export interface MiscEntry {
  title: string;
  href: string;
  description?: string;
}

export interface MiscCollection {
  slug: string;
  title: string;
  icon: "books" | "database" | "geometry" | "globe";
  entries: MiscEntry[];
  watermark?: "francia-flip" | "cinema";
}

export const miscCollections: MiscCollection[] = [
  {
    slug: "personal-collections",
    title: "Personal collections (non-mathematical)",
    icon: "books",
    watermark: "cinema",
    entries: [
      {
        title: "A collection of my favorite literature",
        href: "https://surajdash-math.github.io/bibliotheca/",
      },
    ],
  },
  {
    slug: "mathematical-databases",
    title: "Mathematical databases",
    icon: "database",
    watermark: "francia-flip",
    entries: [
      {
        title: "Nguyen Dang Khai Hoan's webpage",
        href: "https://khaihoanmath.github.io/polynomial-arithmetic-atlas/",
        description: "on polynomials and their Galois groups",
      },
    ],
  },
  {
    slug: "interesting-mathematics",
    title: "Interesting webpages (Mathematical)",
    icon: "geometry",
    entries: [],
  },
  {
    slug: "interesting-non-mathematical-pages",
    title: "Interesting webpages (Non-mathematical)",
    icon: "globe",
    entries: [
      {
        title: "Some interesting projects by Isaac Martin",
        href: "https://web.ma.utexas.edu/users/ikmartin/projects/",
      },
    ],
  },
];
