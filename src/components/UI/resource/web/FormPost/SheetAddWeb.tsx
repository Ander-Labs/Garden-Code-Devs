import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

import { BadgePlus } from "lucide-react";
import dynamic from "next/dynamic";

const FormRegister = dynamic(() => import("./FormRegister"), {
  loading: () => <p>Loading...</p>,
});

export default function SheetAddWeb() {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="bg-blue-600 text-white hover:bg-blue-500 flex justify-around items center">
            <BadgePlus className="pr-2" /> New Web
          </Button>
        </SheetTrigger>
        <SheetContent
          side={"left"}
          className="w-auto md:w-1/2 lg:w-1/3"
          style={{
            maxHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <SheetHeader>
            <SheetTitle className="text-center">
              Sugerir plataforma/web
            </SheetTitle>
            <SheetDescription className="text-center ">
              Comparte en Garden Code tu plataforma/web favorita.
            </SheetDescription>
          </SheetHeader>
          <ScrollArea
            className="w-full grow"
            style={{ maxHeight: "calc(100vh - 100px)" }} // Ajustar la altura para compensar el header
          >
            <FormRegister />
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </>
  );
}
