//src/components/UI/resource/tags/FormAdd.tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/hooks/use-toast";
import { Category, CategorySchema } from "@/schemas/db/tagsType";
import { useAddLenguage } from "@/hooks/db/Devlanguage/useAddLanguage";

export default function FormAddLenguage() {
  const { toast } = useToast();
  const { addLenguage, loading, error } = useAddLenguage();

  const form = useForm<Category>({
    resolver: zodResolver(CategorySchema),
    defaultValues: {
      name: "",
    },
  });

  async function onSubmit(data: Category) {
    const success = await addLenguage(data); // Firebase se encargará de generar el id automáticamente

    if (success) {
      toast({
        title: "Programming Language añadido correctamente",
        description: `${data.name} se ha añadido a la base de datos.`,
        variant: "default",
      });
      // Reinicia el formulario
      form.reset({
        name: "", // Reinicia el campo 'name' a su valor por defecto
      });
    } else {
      toast({
        title: "Fallo al añadir el Programming Language",
        description: error || "Se ha producido un error desconocido.",
        variant: "destructive",
      });
    }
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="gap-6 space-y-6"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Programming Language Name" {...field} />
                </FormControl>
                <FormDescription>
                  No permitimos Programming Language duplicadas.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={loading}>
            {loading ? "Adding..." : "Add Language"}
          </Button>
        </form>
      </Form>
    </>
  );
}
