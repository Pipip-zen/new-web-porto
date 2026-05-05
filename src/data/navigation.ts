export type NavigationItem = {
  href: string;
  label: string;
  shortLabel: string;
  index: string;
};

export const siteProfile = {
  name: "Rafif Nuha",
  role: "Designer / Developer",
  location: "Surabaya, Indonesia",
  availability: "Open to Project",
  email: "rafif.nuha@gmail.com"
};

export const navigationItems: NavigationItem[] = [
  {
    href: "/",
    label: "Index",
    shortLabel: "Home",
    index: "01"
  },
  {
    href: "/works",
    label: "Works",
    shortLabel: "Works",
    index: "02"
  },
  {
    href: "/about",
    label: "About",
    shortLabel: "About",
    index: "03"
  },
  {
    href: "/contact",
    label: "Contact",
    shortLabel: "Contact",
    index: "04"
  }
];
