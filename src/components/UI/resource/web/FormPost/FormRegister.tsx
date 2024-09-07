// src/components/UI/resource/web/FormPost/FormRegister.tsx
"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
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

  const form = useForm<Platform>({
    resolver: zodResolver(PlatformSchema),
    defaultValues: {
      name: "",
      description: "",
      url: "",
      categorys: [],
      tags: [],
      contributor: {
        username: userData?.githubUserName || "",
        uid: userData?.uid || "",
        avatar: userData?.photoURL || "",
      },
    },
  });

  const handleCategorySelect = (selectedCategories: string[]) => {
    setSelectedCategories(selectedCategories);
    form.setValue("categorys", selectedCategories);
  };

  const handleTagSelect = (selectedTags: string[]) => {
    setSelectedTags(selectedTags);
    form.setValue("tags", selectedTags);
  };

  async function onSubmit(data: Platform) {
    try {
      const response = await fetch("/api/web/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error);
      }

      const result = await response.json();
      toast({
        title: "¡Éxito!",
        description: "La plataforma ha sido registrada con éxito.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: `Ocurrió un error: ${error.message}`,
        variant: "destructive",
      });
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <GeneralInfo control={form.control} />
          {/* Input de logoUrl */}
          <FormField
            control={form.control}
            name="categorys"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Categorías</FormLabel>
                <FormControl>
                  <Category onSelectCategories={handleCategorySelect} />
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
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tags</FormLabel>
                <FormControl>
                  <Tags onSelectTags={handleTagSelect} />
                </FormControl>
                <FormDescription>
                  Selecciona las Tags que correspondan.
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
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </>
  );
}
