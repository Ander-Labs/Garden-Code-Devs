// src/hooks/db/web/addPlatformToFirestore.ts
import { collection, addDoc } from "firebase/firestore";
import { Platform } from "@/schemas/web/platformsType";
import {db} from '@/config/firebase/Firebase.config'


export const addPlatformToFirestore = async (platformData: Platform) => {
  try {
    // Guardar la plataforma en la colección de "platforms"
    const docRef = await addDoc(collection(db, "platforms"), platformData);
 // Retorna el ID del documento creado
  } catch (error) {
    throw new Error("Error al guardar la plataforma en Firestore.");
  }
};
