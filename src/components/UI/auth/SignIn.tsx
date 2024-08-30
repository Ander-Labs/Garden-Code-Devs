// src/components/UI/auth/SignIn.tsx
"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PersonIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SignInZ } from "@/schemas/auth/SignIn";
import useSignIn from "@/hooks/Auth/useSignIn";
import { useAuth } from "@/hooks/Auth/useAuth";
import { useRouter } from "next/navigation";

const BtnAuth = dynamic(() => import("./BtnAuth"));

export default function SignIn() {
  const { signInWithEmail } = useSignIn();
  const { user } = useAuth();
  const router = useRouter();

  const form = useForm<z.infer<typeof SignInZ>>({
    resolver: zodResolver(SignInZ),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof SignInZ>) {
    const user = await signInWithEmail(values.email, values.password);
    if (user) {
      router.push("/");
    }
  }

  return (
    <>
      <section className="w-full h-screen flex justify-center items-center">
        <Card className="mx-auto max-w-sm">
          <CardHeader className="flex justify-center items-center gap-4">
            <PersonIcon className=" w-10 h-10 rounded-full border-2 border-black dark:border-white" />
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription className="flex justify-center items-center gap-4 text-center">
              Introduzca su dirección de correo electrónico para acceder a su
              cuenta
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          id="email"
                          type="email"
                          placeholder="email@example.com"
                          required
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          id="password"
                          type="password"
                          placeholder="*******"
                          required
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  ¿Ha olvidado su contraseña?
                </Link>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </form>
            </Form>
            {/* btnGithub */}
            <BtnAuth />
            {/* SignUP */}
            <div className="mt-4 text-center text-sm">
              ¿No tiene cuenta?{" "}
              <Link href="/sign-up" className="underline">
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
