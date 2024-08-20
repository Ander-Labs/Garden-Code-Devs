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

import { LibraryBig}  from 'lucide-react'

export default function Resource() {
  return (
    <>
      <section className="w-full h-screen flex flex-col justify-center items-center">
        <h2 className="scroll-m-20 text-center text-5xl font-extrabold tracking-tight lg:text-6xl px-4 mb-6">
          Explorar recursos valiosos
        </h2>

        <div className="w-full flex justify-center items-center px-4 gat-6 flex-col md:flex-wrap md:flex-row md:gap-6 mt-2">
          {CardResources.map((c) => (
            <Card key={c.id} className="m-2 w-1/2 md:w-1/3 lg:w-1/4">
                  <CardHeader>
                      {/* {c.icon}  */}
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
