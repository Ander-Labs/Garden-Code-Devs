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
import { TagIcon } from "lucide-react";

const FormAdd = dynamic(() => import("./FormAdd"));

export default function DialogFormTags() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">
            <TagIcon size={"1.5em"} />
            New Tag
          </Button>
        </DialogTrigger>
        <DialogContent className="w-5/6 space-y-6 rounded-xl">
          <DialogHeader>
            <DialogTitle>Agregar una nueva Tag </DialogTitle>
            <DialogDescription>
              Esta acción agregara una nueva Tag para web/plataform.
            </DialogDescription>
          </DialogHeader>
          <FormAdd />
        </DialogContent>
      </Dialog>
    </>
  );
}
