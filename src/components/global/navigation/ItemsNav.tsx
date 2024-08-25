"use client";
import { usePathname } from "next/navigation";
import { NavItems } from "@/types/navType";
import Link from "next/link";

export default function ItemsNav() {
  const pathname = usePathname();

  return (
    <>
      {NavItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={`text-muted-foreground transition-colors hover:text-foreground ${
            pathname === item.href ? "text-primary" : "text-muted-foreground"
          } `}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
}
