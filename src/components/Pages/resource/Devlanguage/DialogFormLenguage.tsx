import dynamic from "next/dynamic";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CodeIcon } from "lucide-react";

const FormAddLenguage = dynamic(() => import("./FormAddLenguage"));

export default function DialogFormLenguage() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-red-600 hover:bg-red-700 text-white">
            <CodeIcon size={"1.5em"} />
            New Lenguage
          </Button>
        </DialogTrigger>
        <DialogContent className="w-5/6 space-y-6 rounded-xl">
          <DialogHeader>
            <DialogTitle>
              Agregar una nuevo lenguage de programacion{" "}
            </DialogTitle>
            <DialogDescription>
              Esta acción agregara una nuevo lenguage de programacion.
            </DialogDescription>
          </DialogHeader>
          <FormAddLenguage />
        </DialogContent>
      </Dialog>
    </>
  );
}
