// src/components/UI/resource/web/FormPost/FormRegister.tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
  loading: () => <p>Loading...</p>,
});

const Tags = dynamic(() => import("./Tags"), {
  loading: () => <p>Loading...</p>,
});

export default function FormRegister() {
  const { toast } = useToast();

  const { user } = useAuth();
  const { userData } = useUserData(user?.uid);

  const form = useForm<Platform>({
    resolver: zodResolver(PlatformSchema),
    defaultValues: {
      name: "",
      description: "",
      url: "",
      categorys: [""],
      tags: [""],
      contributor: {
        username: userData?.githubUserName,
        uid: userData?.uid,
        avatar: userData?.photoURL,
      },
    },
  });

  const handleCategorySelect = (selectedCategories: string[]) => {
    form.setValue("categorys", selectedCategories);
  };

  const handletTagSelect = (selectedTags: string[]) => {
    form.setValue("tags", selectedTags);
  };

  async function onSubmit(data: Platform) {
    try {
      const response = await fetch("/api/web/register-platform", {
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
            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <Tags onSelectTags={handletTagSelect} />
                  </FormControl>
                  <FormDescription>
                    Selecciona las Tags que correspondan.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          
        </form>
      </Form>

    </>
  );
}
