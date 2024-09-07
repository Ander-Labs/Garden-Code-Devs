
//src/app/api/web/register/route.ts
import { NextResponse } from "next/server";
import { addPlatformToFirestore } from "@/hooks/db/web/addPlatformToFirestore";
import { PlatformSchema } from "@/schemas/web/platformsType";

// Función para manejar el POST request
export async function POST(req: Request) {
  try {
    // Leer el cuerpo de la solicitud
    const body = await req.json();

    // Validar el esquema con Zod
    const result = PlatformSchema.safeParse(body);

    if (!result.success) {
      // Devolver error 400 si falla la validación
      return NextResponse.json({ error: result.error.errors }, { status: 400 });
    }

    // Guardar la plataforma en Firestore
    const platformId = await addPlatformToFirestore(result.data);

    // Responder con éxito
    return NextResponse.json(
      { message: "Platform created successfully!", platformId },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error saving platform to Firestore:", error);

    // Responder con error de servidor
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
