import type { Metadata } from "next";

import dynamic from "next/dynamic";

// import components dynamic
const HeroAbout = dynamic(() => import("@/components/UI/About/HeroAbout"));

export const metadata: Metadata = {
  title: "About",
  description:
    "plataforma de código abierto dedicada a proporcionar recursos valiosos para desarrolladores de todos los niveles. Nuestro objetivo es construir una comunidad donde los desarrolladores puedan acceder fácilmente a contenido educativo, herramientas útiles, y conectarse con influenciadores destacados en el mundo de la programación.",
};

export default function page() {
  return (
    <>
      <HeroAbout />
    </>
  );
}
