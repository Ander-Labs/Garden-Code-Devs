import { CheckCircle, Circle, Loader } from "lucide-react";
import { RoadmapItems } from "@/types/roadmapType";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Roadmap() {
  return (
    <>
      <section className="w-full py-12 px-4" id="roadmap">
        <h2 className="text-center text-4xl font-extrabold mb-4 my-4">
          Roadmap del Proyecto
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {RoadmapItems.map((item) => (
            <Card
              key={item.id}
              className={`border-2 rounded-lg shadow-lg transition-all ${
                item.completed === true
                  ? "border-primary"
                  : item.process === true && item.completed === false
                  ? "border-yellow-500"
                  : "border-gray-300"
              }`}
            >
              <CardHeader className="flex items-center">
                <Badge
                  variant="outline"
                  className={`border-2 rounded-lg shadow-lg transition-all ${
                    item.completed === true
                      ? "border-primary"
                      : item.process === true && item.completed === false
                      ? "border-yellow-500"
                      : "border-gray-300"
                  }`}
                >
                  {item.completed ? (
                    <span className=" w-32 p-1 flex justify-around items-center">
                      <CheckCircle className="text-primary w-6 h-6 mr-2" />
                      Completado
                    </span>
                  ) : item.process === true && item.completed === false ? (
                    <span className=" w-32 p-1 flex justify-around items-center">
                      <Loader className="text-yellow-500 w-6 h-6 mr-2" />
                      En Proceso
                    </span>
                  ) : (
                    <span className=" w-28 p-1 flex justify-around items-center">
                      <Circle className="text-gray-400 w-6 h-6 mr-2" /> Pronto
                    </span>
                  )}
                </Badge>

                <CardTitle className="text-xl font-bold">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-zinc-600 dark:text-zinc-300">
                  {item.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex items-baseline justify-between">
                <p>{item.date === undefined ? "--/--/--" : item.date} </p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
