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

export default function Account() {
  const { user } = useAuth();

  return (
    <>
      <section className="w-full h-screen flex justify-center items-center">
        <Card>
          <CardHeader>
            <CardTitle>Welcome, {user?.displayName || "Guest"}</CardTitle>
            <CardDescription>
              {user?.email || "No email available"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {user?.photoURL ? (
              <Image
                src={user.photoURL}
                alt={`${user.displayName}'s profile picture`}
                width={100}
                height={100}
                className="rounded-full"
              />
            ) : (
              <p>No profile picture available</p>
            )}
            <p>User ID: {user?.uid}</p>
          </CardContent>
          <CardFooter>
            <p>Thank you for being a part of our platform!</p>
          </CardFooter>
        </Card>
      </section>
    </>
  );
}
