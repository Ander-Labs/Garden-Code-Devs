"use client";
import { HomeIcon, Route, FolderClosedIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItems } from "@/types/navType";

const Icons: Record<string, JSX.Element> = {
  Home: <HomeIcon />,
  Roadmap: <Route />,
  Resources: <FolderClosedIcon />,
};

export default function NavMobile() {
  const pathname = usePathname();
  return (
    <>
      <header className="sticky bottom-0 left-0 right-0 z-50 block md:hidden h-16 gap-4 border-t bg-background px-4 md:px-6 pt-2">
        <nav className="flex justify-around items-center gap-6 text-lg font-medium md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          {NavItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-muted-foreground transition-colors hover:text-foreground flex flex-col justify-center items-center ${
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              <span>{Icons[item.name]}</span>
              {item.name}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}
