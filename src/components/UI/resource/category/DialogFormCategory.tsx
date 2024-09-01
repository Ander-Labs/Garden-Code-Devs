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
import { Hash } from "lucide-react";

const FormPost = dynamic(() => import("./FormPost"));

export default function DialogFormCategory() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="text-white">
            <Hash size={"1.5em"} />
            New Category
          </Button>
        </DialogTrigger>
        <DialogContent className="w-5/6 space-y-6 rounded-xl">
          <DialogHeader>
            <DialogTitle>Agregar una nueva categoria </DialogTitle>
            <DialogDescription>
              Esta acción agregara una nueva categoría para web/plataform.
            </DialogDescription>
          </DialogHeader>
          <FormPost />
        </DialogContent>
      </Dialog>
    </>
  );
}
