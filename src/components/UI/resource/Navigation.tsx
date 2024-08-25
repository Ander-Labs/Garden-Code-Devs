"use client";
import { ResourceNav } from "@/types/navType";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

import {
  LayoutDashboard,
  AppWindow,
  TvMinimalPlayIcon,
  Github,
SproutIcon,
  Bell,
  Package2,
} from "lucide-react";
import Link from "next/link";

const Icons: Record<string, JSX.Element> = {
  Dashboard: <LayoutDashboard />,
  Webs: <AppWindow />,
  Repositorios: <Github />,
  Influencers: <TvMinimalPlayIcon />,
};

export default function Navigation() {
  const pathname = usePathname();

  return (
    <>
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <SproutIcon className="h-6 w-6" />
          <span className="">Garden Code</span>
        </Link>
        <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Toggle notifications</span>
        </Button>
      </div>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          {ResourceNav.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
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
      </div>
    </>
  );
}
