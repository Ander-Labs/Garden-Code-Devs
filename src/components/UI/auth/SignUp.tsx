"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PersonIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import useSignUp from "@/hooks/Auth/useSignUp";
import { SignUpSchema } from "@/schemas/auth/SignUp";

const BtnAuth = dynamic(() => import("./BtnAuth"));

export default function SignUp() {
  const { signUpWithEmail } = useSignUp();

  // Configuración del formulario con validación de Zod
  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit = async (data: z.infer<typeof SignUpSchema>) => {
    try {
      await handleSignUp(data);
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  const handleSignUp = async (data: z.infer<typeof SignUpSchema>) => {
    const { email, password, displayName, githubUserName } = data;
    const user = await signUpWithEmail(
      email,
      password,
      displayName,
      githubUserName
    );
    if (user) {
      // Redirigir o mostrar un mensaje de éxito
      console.log("User signed up successfully:", user);
    }
  };

  return (
    <>
      <section className="w-full h-screen flex justify-center items-center py-8">
        <Card className="mx-auto max-w-sm">
          <CardHeader className="flex justify-center items-center gap-4">
            <PersonIcon className="w-10 h-10 rounded-full border-2 border-black dark:border-white" />
            <CardTitle className="text-xl">Sign Up</CardTitle>
            <CardDescription className="text-center">
              Introduzca sus datos para crear una cuenta
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                {/* Display Name */}
                <FormField
                  control={form.control}
                  name="displayName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="name@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Password */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="*******"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Github UserName */}
                <FormField
                  control={form.control}
                  name="githubUserName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>GitHub User Name</FormLabel>
                      <FormControl>
                        <Input placeholder="GitHub Username" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  Create an account
                </Button>
              </form>
            </Form>

            {/* Botón de autenticación github) */}
            <BtnAuth />

            <div className="mt-4 text-center text-sm">
              Ya tiene una cuenta?{" "}
              <Link href="/sign-in" className="underline">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
