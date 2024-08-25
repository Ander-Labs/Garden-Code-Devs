export interface ItemsNav {
  name: string;
  href: string;
}

export const NavItems: ItemsNav[] = [
  {
    name: "Home",
    href: "/",
  },
  // {
  //   name: "About",
  //   href: "/about",
  // },
  // {
  //   name: "Contact",
  //   href: "/contact",
  // },
  {
    name: "Roadmap",
    href: "/roadmap",
  },
  {
    name: "Resources",
    href: "/resources",
  },
];


export const ResourceNav: ItemsNav[] = [
  {
    name: "Dashboard",
    href: "/resources",
  },
  {
    name: "Webs",
    href: "/resources/web",
  },
  {
    name: "Repositorios",
    href: "/resources/github",
  },
  {
    name: "Influencers",
    href: "/resources/inluencers",
  },
];