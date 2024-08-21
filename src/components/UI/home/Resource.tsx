//src/components/UI/home/Resource.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { CardResources } from "@/types/ResourceHType";
import Link from "next/link";

import { LibraryBig, PencilRuler, MessagesSquare } from "lucide-react";

const Icons: Record<number, JSX.Element> = {
  1: <LibraryBig />,
  2: <PencilRuler />,
  3: <MessagesSquare />,
};

export default function Resource() {
  return (
    <>
      <section className="w-full flex flex-col justify-center items-center py-10">
        <h2 className=" w-5/6 md:w-3/5 scroll-m-20 text-center text-5xl font-extrabold tracking-tight lg:text-6xl px-4">
          Explorar los mejores<span className="text-primary"> recursos</span>{" "}
          para <span className="text-primary">desarrolladores</span>
        </h2>
        <p className="text-center text-sm text-muted-foreground px-5 mt-2 leading-7 [&:not(:first-child)]:mt-6 md:w-3/5">
          Garden Code ofrece una gran cantidad de recursos, desde foros
          comunitarios hasta herramientas para desarrolladores y contenidos
          educativos, todos ellos diseñados para ayudarle a crecer.
        </p>

        <div className="w-full flex justify-center items-center px-4 gat-6 flex-col md:flex-wrap md:flex-row md:gap-6 mt-2">
          {CardResources.map((c) => (
            <Card key={c.id} className="m-2 w-1/2 md:w-1/3 lg:w-1/4">
              <CardHeader>
                {/* {c.icon}  */}
                {Icons[c.icon]}

                <CardTitle>{c.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{c.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href={c.btnLink} className="text-white">
                    Ver Más
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
