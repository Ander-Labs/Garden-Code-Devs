//src/components/UI/dashboard/Acount.tsx

"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/hooks/Auth/useAuth";
import { CircleUser } from "lucide-react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { useUserStore } from "@/Global/Auth/useUserStore";

export default function Account() {
  const { user } = useAuth();

    const { userData } = useUserStore();

  if (!userData) {
    return <p>Cargando los datos del usuario...</p>;
  }


  return (
    <>
      <section className="w-full h-screen flex justify-center items-center">
        <Card className="w-full max-w-md p-4 shadow-lg">
          <CardHeader className="flex flex-col justify-center items-center">
            {userData?.photoURL ? (
              <img
                src={userData.photoURL}
                alt={`${userData.displayName}'s profile picture`}
                width={100}
                height={100}
                className="rounded-full"
              />
            ) : userData?.githubUserName ? (
              <Avatar className="w-24 h-24">
                <AvatarImage
                  src={`https://github.com/${userData.githubUserName}.png`}
                  alt={`${userData.githubUserName}'s profile picture`}
                />
                <AvatarFallback>{userData.githubUserName}</AvatarFallback>
              </Avatar>
            ) : (
              <CircleUser size={80} />
            )}
            <CardTitle>
              Welcome, {userData?.githubUserName || "User:"}
            </CardTitle>
            <CardDescription>
              {userData?.displayName || "No disponible"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <span className="font-bold text-primary">User ID:</span>
            <p> {user?.uid || "No disponible"}</p>
            <span className="font-bold text-primary">Email:</span>
            <p>{userData?.email || "No disponible"}</p>
            <span className="font-bold text-primary">Github UserName:</span>

            <p className="flex justify-start items-center">
              {userData?.githubUserName || "No disponible"}{" "}
              <Link
                href={`https://github.com/${userData?.githubUserName}`}
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                {" "}
                <ExternalLink size={20} />{" "}
              </Link>{" "}
            </p>
          </CardContent>
          <CardFooter className="flex justify-center flex-col">
            <p className="text-center text-sm">
              Gracias por formar parte de nuestra plataforma.
            </p>
          </CardFooter>
        </Card>
      </section>
    </>
  );
}
