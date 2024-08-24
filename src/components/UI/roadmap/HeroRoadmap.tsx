import { Button } from "@/components/ui/button";
import { MagnifyingGlassIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function HeroRoadmap() {
  return (
    <>
      <section className="w-full h-screen flex flex-col  justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-primary text-4xl md:text-5xl font-bold">
            Roadmap Garden Code
          </h1>
          <p className="p-4 md:w-3/5 text-center md:px-6">
            Garden Code es una plataforma de código abierto dedicada a ayudar a
            desarrolladores a todos los niveles. Este es nuestro plan de
            crecimiento y las mejoras que tenemos previstas para seguir
            ofreciendo valor a nuestra comunidad.
          </p>
        </div>

        <div className="flex ">
          <Button className="font-bold text-white mx-2">
            <GitHubLogoIcon /> <span className="px-2"> Contribuir</span>
          </Button>
          <Button variant="outline" className="font-bold" asChild>
            <Link href="#roadmap">
              <MagnifyingGlassIcon /> <span className="px-2"> Ver Roadmap</span>
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
