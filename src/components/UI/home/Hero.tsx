import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <>
      <section className="w-full h-screen flex flex-col justify-center items-center ">
        <div>
          <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
            Transforme sus habilidades con Garden Code
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-center">
            Únase a una próspera comunidad de desarrolladores y aproveche una
            gran cantidad de recursos.
          </p>
        </div>
        <Button variant="outline">Button</Button>

        <span></span>
      </section>
    </>
  );
}
