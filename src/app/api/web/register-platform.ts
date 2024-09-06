// src/pages/api/web/register-platform.ts

import { PlatformSchema } from "@/schemas/web/platformsType";
import type { NextApiRequest, NextApiResponse } from "next";
import { addPlatformToFirestore } from "@/hooks/db/web/addPlatformToFirestore";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // Validar la estructura de la plataforma
    const result = PlatformSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({ error: result.error.errors });
    }

    try {
      // Intentar guardar los datos en Firestore después de la validación
      const platformId = await addPlatformToFirestore(result.data);
      return res
        .status(200)
        .json({ message: "Platform created successfully!", platformId });
    } catch (error) {
      console.error("Error saving platform to Firestore:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
