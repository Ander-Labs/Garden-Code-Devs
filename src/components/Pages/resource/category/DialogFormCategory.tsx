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
import { ListPlus } from "lucide-react";

const FormPost = dynamic(() => import("./FormPost"));

export default function DialogFormCategory() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">
            <TooltipGlobal tooltipContent="Agregar una nueva categoría">
              <ListPlus size={"1.5em"} />
            </TooltipGlobal>
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
