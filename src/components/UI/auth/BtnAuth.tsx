//src/components/UI/auth/btnAuth.tsx
"use client";

import useSignIn from "@/hooks/Auth/useSignIn";
import { useAuth } from "@/hooks/Auth/useAuth";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

export default function BtnAuth() {
  const { signInWithGithub } = useSignIn();
  const { user } = useAuth();

  const router = useRouter();

  if (user) {
    router.push("/resources");
  }

  return (
    <Button
      variant="outline"
      className="w-full mt-2"
      onClick={signInWithGithub}
    >
      <GitHubLogoIcon /> <span className="pl-2 font-medium">GitHub</span>
    </Button>
  );
}
