//src/components/UI/resource/web/FormPost/GeneralInfo.tsx

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { Platform } from "@/schemas/web/platformsType";

interface GeneralInfoProps {
  control: Control<Platform>;
}

export default function GeneralInfo({ control }: GeneralInfoProps) {
  return (
    <>
      <FormField
        control={control}
        name="name"
        render={({ field, fieldState }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input placeholder="Name" required {...field} />
            </FormControl>
            <FormDescription>Nombre de la plataforma o web.</FormDescription>
            <FormMessage>{fieldState.error?.message}</FormMessage>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="description"
        render={({ field, fieldState }) => (
          <FormItem>
            <FormLabel>Descripción</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Descripcion de la plataforma."
                required
                {...field}
              />
            </FormControl>
            <FormDescription>
              Breve descripción de la plataforma.
            </FormDescription>
            <FormMessage>{fieldState.error?.message}</FormMessage>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="url"
        render={({ field, fieldState }) => (
          <FormItem>
            <FormLabel>Url</FormLabel>
            <FormControl>
              <Input placeholder="https://webname.com" required {...field} />
            </FormControl>
            <FormDescription>Dirección URL de la plataforma.</FormDescription>
            <FormMessage>{fieldState.error?.message}</FormMessage>
          </FormItem>
        )}
      />
    </>
  );
}
