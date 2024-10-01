"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";

interface CommandThemeProps {
  //   children: Readonly<{ children: React.ReactNode }>;
  children: React.ReactNode;
  title: string;
}

export default function CommandTheme({ children, title }: CommandThemeProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild className="flex justify-center">
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full flex items-center mt-0 justify-between"
          >
            Seleciona {title}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full ">
          <Command>
            <CommandInput placeholder={`Search ${title}...`} />
            <CommandList>
              <CommandGroup>{children}</CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
}
