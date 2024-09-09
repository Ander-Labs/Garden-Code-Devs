// src/components/UI/resource/web/FormPost/FormRegister.tsx
"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormDescription,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { Platform, PlatformSchema } from "@/schemas/web/platformsType";
import dynamic from "next/dynamic";
import { useToast } from "@/components/ui/hooks/use-toast";
import { useAuth } from "@/hooks/Auth/useAuth";
import { useUserData } from "@/hooks/db/users/useUserData";
import { Skeleton } from "@/components/ui/skeleton";
import { addPlatformToFirestore } from "@/hooks/db/web/addPlatformToFirestore";

const GeneralInfo = dynamic(() => import("./GeneralInfo"), {
  loading: () => <Skeleton className="w-auto h-[80px] rounded-xl" />,
});

const Category = dynamic(() => import("./Category"), {
  loading: () => <Skeleton className="w-auto h-[40px] rounded-xl" />,
});

const Tags = dynamic(() => import("./Tags"), {
  loading: () => <Skeleton className="w-auto h-[40px] rounded-xl" />,
});

export default function FormRegister() {
  const { toast } = useToast();
  const { user } = useAuth();
  const { userData } = useUserData(user?.uid);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  const form = useForm<Platform>({
    resolver: zodResolver(PlatformSchema),
    defaultValues: {
      name: "",
      description: "",
      url: "",
      categorys: [],
      tags: [],
      contributor: {
        username: userData?.githubUserName || "Loading...",
        uid: userData?.userId || userData?.uid || "Loading...",
      },
    },
  });

  useEffect(() => {
    if (userData) {
      form.setValue("contributor.username", userData.githubUserName);
      form.setValue("contributor.uid", userData.userId || userData.uid);
    }
  }, [userData, form]);

  const handleCategorySelect = (selectedCategories: string[]) => {
    setSelectedCategories(selectedCategories);
    form.setValue("categorys", selectedCategories); // Asegúrate de actualizar el valor del formulario correctamente
  };

  const handleTagSelect = (selectedTags: string[]) => {
    setSelectedTags(selectedTags);
    form.setValue("tags", selectedTags); // Asegúrate de actualizar el valor del formulario correctamente
  };

  async function onSubmit(data: Platform) {
    setIsSubmitting(true);
    setValidationError(null);
    try {
      const response = await fetch("/api/web/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error || errorData.details || "Unknown error occurred"
        );
      }

      await addPlatformToFirestore(data);
      toast({
        title: "¡Éxito!",
        description: `La plataforma ha sido registrada con éxito. `,
      });
    } catch (error: any) {
      console.error("Error saving platform:", error);
      toast({
        title: "Error",
        description: `Ocurrió un error: ${error.message}`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <GeneralInfo control={form.control} />
          {/* Input de categorías */}
          <FormField
            control={form.control}
            name="categorys"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Categorías</FormLabel>
                <FormControl>
                  <Category
                    selectedCategories={selectedCategories}
                    onSelectCategories={handleCategorySelect}
                  />
                </FormControl>
                <FormDescription>
                  Selecciona las categorías que correspondan.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Mostrar categorías seleccionadas */}
          {selectedCategories.length > 0 && (
            <div className="mt-4">
              <h5 className="font-bold mb-2">Categorías seleccionadas:</h5>
              <ul>
                {selectedCategories.map((category) => (
                  <li key={category} className="text-sm badge badge-primary">
                    ✅ {category}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Input de tags */}
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tags</FormLabel>
                <FormControl>
                  <Tags
                    selectedTags={selectedTags}
                    onSelectTags={handleTagSelect}
                  />
                </FormControl>
                <FormDescription>
                  Selecciona las tags que correspondan.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Mostrar tags seleccionadas */}
          {selectedTags.length > 0 && (
            <div className="mt-4">
              <h5 className="font-bold mb-2">Tags seleccionadas:</h5>
              <ul>
                {selectedTags.map((tag) => (
                  <li key={tag} className="text-sm badge badge-primary">
                    ✅ {tag}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="text-white font-semibold"
          >
            {isSubmitting ? "Submitting..." : "Add Web"}
          </Button>
          {validationError && (
            <p className="text-red-500 mt-2">Error: {validationError}</p>
          )}
        </form>
      </Form>
    </>
  );
}
