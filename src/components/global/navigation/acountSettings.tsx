"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleUser, UserRoundX, UserRoundCheck } from "lucide-react";
import { useAuth } from "@/hooks/Auth/useAuth";

export default function AcountSettings() {
  const { user, logout } = useAuth();

  return (
    <>
      {!user ? (
        <Button
          asChild
          variant="secondary"
          size="icon"
          className="rounded-full"
        >
          <Link href={"/sign-up"}>
            <UserRoundX className="h-5 w-5" />
          </Link>
        </Button>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <UserRoundCheck className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              {" "}
              <Link href={"/dashboard"}>Settings</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              {" "}
              <Link href={"/support"}>Support</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  );
}
