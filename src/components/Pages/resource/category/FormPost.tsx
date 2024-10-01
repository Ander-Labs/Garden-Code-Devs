//src/components/UI/resource/category/FormPost.tsx
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
import { useAddCategory } from "@/hooks/db/category/useAddCategory";

export default function FormPost() {
  const { toast } = useToast();
  const { addCategory, loading, error } = useAddCategory();

  const form = useForm<Category>({
    resolver: zodResolver(CategorySchema),
    defaultValues: {
      name: "",
    },
  });

  async function onSubmit(data: Category) {
    const success = await addCategory(data); // Firebase se encargará de generar el id automáticamente

    if (success) {
      toast({
        title: "Categoría añadida correctamente",
        description: `${data.name} se ha añadido a la base de datos.`,
        variant: "default",
      });
      // Reinicia el formulario
      form.reset({
        name: "", // Reinicia el campo 'name' a su valor por defecto
      });
    } else {
      toast({
        title: "Fallo al añadir categoría",
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
                  <Input placeholder="Category Name" {...field} />
                </FormControl>
                <FormDescription>
                  No permitimos categorías duplicadas.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={loading}>
            {loading ? "Adding..." : "Add Category"}
          </Button>
        </form>
      </Form>
    </>
  );
}
