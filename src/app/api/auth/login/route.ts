import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { token } = await request.json();

  // Establecer la cookie con el token
  const response = NextResponse.json({ message: "Authenticated" });

  response.cookies.set("github_token", token, {
    httpOnly: true, // Solo accesible en el servidor
    secure: process.env.NODE_ENV === "production", // Asegúrate de habilitarlo solo en producción
    sameSite: "strict", // Para mejorar la seguridad
    maxAge: 60 * 60 * 24 * 7, // Expira en 7 días
    path: "/", // Disponible en todas las rutas
  });

  return response;
}
