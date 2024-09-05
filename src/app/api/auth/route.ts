// src/app/api/auth/login/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json(
        { error: "Token no proporcionado" },
        { status: 400 }
      );
    }

    // Configuración de la cookie con el token
    const response = NextResponse.json({
      message: "Token guardado exitosamente",
    });

    response.cookies.set({
      name: "tokenGH",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    });

    return response;
  } catch (error) {
    console.error("Error en el endpoint de login:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
