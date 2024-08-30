"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAuth } from "@/hooks/Auth/useAuth";
import Image from "next/image";
import { CircleUser } from "lucide-react";

export default function Account() {
  const { user } = useAuth();

  return (
    <>
      <section className="w-full h-screen flex justify-center items-center">
        <Card>
          <CardHeader>
            {user?.photoURL ? (
              <Image
                src={user.photoURL}
                alt={`${user.displayName}'s profile picture`}
                width={100}
                height={100}
                className="rounded-full"
              />
            ) : (
              <CircleUser size={80} />
            )}
            <CardTitle>Welcome, {user?.displayName || "User:"}</CardTitle>
            <CardDescription>
              {user?.email || "No email available"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>User ID: {user?.uid}</p>
            <p>Email: {user?.email}</p>
            {/* <p>GitHub: {user?.github || "No GitHub available" }</p> */}
          </CardContent>
          <CardFooter>
            <p>Gracias por formar parte de nuestra plataforma.</p>
          </CardFooter>
        </Card>
      </section>
    </>
  );
}
