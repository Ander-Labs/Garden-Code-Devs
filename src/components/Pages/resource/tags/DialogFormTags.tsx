import dynamic from "next/dynamic";
import TooltipGlobal from "@/components/global/tooltipGlobal";
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
          
            <Button className="bg-red-500 hover:bg-red-600 text-white">
            <TooltipGlobal tooltipContent="Agregar una nueva Tag">
              <TagIcon size={"1.5em"} />
            </TooltipGlobal>
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
