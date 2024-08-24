import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <>
      <section className="w-full py-16 md:py-32 flex flex-col justify-center items-center ">
        <div className="w-5/6 md:w-3/5 flex flex-col justify-center items-center">
          <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-6xl px-4">
            Encuentra todos los recursos para{" "}
            <span className="text-primary">empezar</span> o{" "}
            <span className="text-primary">aprender</span> algo nuevo, todo en
            un solo lugar. <span className="text-primary">Garden Code</span>
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-center md:w-3/5">
            {/* Únase a una próspera comunidad de desarrolladores y aproveche una
            gran cantidad de recursos. */}
            Una plataforma de código abierto donde desarrolladores de todos los
            niveles puedan acceder a recursos valiosos, contenidos educativos y
            mucho más...
          </p>
        </div>
        <div className="flex flex-wrap md:flex-grow justify-center ">
          <Button size="lg" className="mt-2 text-white p-4 px-6 ">
            Explorar Recursos
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="mt-2 text-white ml-2 p-4 px-6 text-muted-foreground "
          >
            Únete a la comunidad
          </Button>
        </div>
        <span className="w-4/5 text-xs text-center mt-4 text-muted-foreground">
          Buscamos recursos de la web los probamos y los reunimos en un solo
          lugar para que puedas aprender lo que quieras.
        </span>
      </section>
    </>
  );
}
