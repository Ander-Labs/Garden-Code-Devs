// src/
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Platform } from "@/schemas/web/platformsType";

// Inicialización de Firestore
const db = getFirestore();

export const addPlatformToFirestore = async (platformData: Platform) => {
  try {
    // Guardar la plataforma en la colección de "platforms"
    const docRef = await addDoc(collection(db, "platforms"), platformData);
    return docRef.id; // Retorna el ID del documento creado
  } catch (error) {
    throw new Error("Error al guardar la plataforma en Firestore.");
  }
};
