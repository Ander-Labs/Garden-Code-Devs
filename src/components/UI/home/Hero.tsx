import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <>
      <section className="w-full h-screen flex flex-col justify-center items-center ">
        <div className="w-5/6 md:w-3/5 flex flex-col justify-center items-center">
          <h1 className="scroll-m-20 text-center text-5xl font-extrabold tracking-tight lg:text-6xl px-4">
            Encuentra todos los recursos para{" "}
            <span className="text-primary">empezar</span> o{" "}
            <span className="text-primary">aprender</span> algo nuevo, todo en un solo lugar.{" "}
            <span className="text-primary">Garden Code</span>
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-center md:w-3/5">
            Únase a una próspera comunidad de desarrolladores y aproveche una
            gran cantidad de recursos.
          </p>
        </div>
        <Button size="lg" className="mt-2 text-white p-4 px-6 ">
          Empezar ahora
        </Button>

        <span className="w-4/5 text-xs text-center mt-4 text-muted-foreground">
          Buscamos recursos de la web los probamos y los reunimos en un solo
          lugar para que puedas aprender lo que quieras.
        </span>
      </section>
    </>
  );
}
