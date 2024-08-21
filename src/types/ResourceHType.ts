//src/types/ResourceHType.ts


export interface Card {
  id: number;
  title: string;
  description: string;
  icon: number;
  btnTitle: string;
  btnLink: string;
}

// <LibraryBig />;
export const CardResources: Card[] = [
  {
    id: 1,
    title: "Educational Content",
    description:
      "Acceda a una amplia gama de tutoriales, artículos y cursos para mejorar sus conocimientos de codificación.",
    icon: 1,
    btnTitle: "Ver más",
    btnLink: "/resources",
  },
  {
    id: 2,
    title: "Developer Tools",
    description:
      "Acceda a una amplia gama herramientas esenciales para mejorar su experiencia de programación.",
    icon: 2,
    btnTitle: "Ver más",
    btnLink: "/resources",
  },
  {
    id: 3,
    title: "Community Connect",
    description:
      "Acceda a una amplia gama los principales expertos y personas influyentes en programación.",
    icon: 3,
    btnTitle: "Ver más",
    btnLink: "/resources",
  },
];
