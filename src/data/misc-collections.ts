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
  watermark?: "none" | "cinema";
}

export const miscCollections: MiscCollection[] = [
  {
    slug: "personal-collections",
    title: "Personal collections (non-mathematical)",
    icon: "books",
    watermark: "cinema",
    entries: [
      {
        title: "Literature catalogue",
        href: "https://surajdash-math.github.io/bibliotheca/",
      },
      {
        title: "Cinema catalogue",
        href: "https://surajdash-math.github.io/cinema/",
      },
    ],
  },
  {
    slug: "mathematical-databases",
    title: "Algebra, Geometry, Number theory database",
    icon: "database",
    watermark: "none",
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
