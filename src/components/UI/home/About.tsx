import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <>
      <section className="w-full h-screen flex flex-col justify-center items-center">
        <h2 className="scroll-m-20 text-center text-5xl font-extrabold tracking-tight lg:text-6xl px-4">
          Que es <span className="text-primary">Garden Code</span> ?
        </h2>
        <p className="text-wrap leading-7 [&:not(:first-child)]:mt-6 text-center md:w-3/5">
          Garden Code es una plataforma basada en código abierto, dedicada a
          proporcionar recursos para desarrolladores de todos los niveles.
          Nuestra misión es fomentar una comunidad vibrante donde los
          programadores puedan acceder a contenido educativo, descubrir
          herramientas esenciales y conectarse con figuras influyentes de la
          industria tecnológica. Con un enfoque en la colaboración y el
          conocimiento compartido, nuestro objetivo es empoderarte en tu viaje
          de codificación.
        </p>
        <Button className="text-white mt-4 ">Mas Informacion</Button>
      </section>
    </>
  );
}
