
// src/app/api/web/register/route.ts
import { NextResponse } from "next/server";
import { PlatformSchema } from "@/schemas/web/platformsType";

// Función de logging básica
function log(message: string, data?: any) {
  console.log(`[${new Date().toISOString()}] ${message}`);
  if (data) console.log(JSON.stringify(data, null, 2));
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validar los datos
    const result = PlatformSchema.safeParse(body);

    if (!result.success) {

      return NextResponse.json(
        { error: "Validation Error", details: result.error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Datos validados correctamente" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error en la validación de plataforma:", error);
    return NextResponse.json(
      { error: "Error interno del servidor", message: error.message },
      { status: 500 }
    );
  }
}
