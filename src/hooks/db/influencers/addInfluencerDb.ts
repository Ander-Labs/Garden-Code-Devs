// src/hooks/db/web/addPlatformToFirestore.ts
import { collection, addDoc } from "firebase/firestore";
import { Platform } from "@/schemas/web/platformsType";
import { db } from "@/config/firebase/Firebase.config";

export const addInfluencersDb = async (data: Platform) => {
  try {
    // Guardar la plataforma en la colección de "platforms"
    await addDoc(collection(db, "platforms"), data);
  } catch (error:any) {
    console.error("Error al guardar la plataforma en Firestore:", error);
    throw new Error("Error al guardar la plataforma en Firestore.");
  }
};

