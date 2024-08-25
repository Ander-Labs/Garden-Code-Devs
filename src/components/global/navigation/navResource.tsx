"use client";
import Link from "next/link";
import { ResourceNav } from "@/types/navType";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import {
  LayoutDashboard,
  AppWindow,
  TvMinimalPlayIcon,
  Github,
  Menu,
  FolderCode,
} from "lucide-react";

const Icons: Record<string, JSX.Element> = {
  Dashboard: <LayoutDashboard />,
  Webs: <AppWindow />,
  Repositorios: <Github />,
  Influencers: <TvMinimalPlayIcon />,
};

export default function NavResource() {
  const pathname = usePathname();

  if (pathname === "/" || pathname === "/roadmap") {
    return null;
  }

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <FolderCode className="h-6 w-6" />
              <span className="sr-only">Garden Code</span>
            </Link>
            {ResourceNav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex justify-start items-center gap-4 text-muted-foreground transition-colors hover:text-foreground ${
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                } `}
              >
                <span>{Icons[item.name]}</span>
                {item.name}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}
