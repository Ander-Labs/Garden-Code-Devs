// src/hooks/db/category/useCategories.ts
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/config/firebase/Firebase.config";

export const useGetTags = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Función para sincronizar tags de Firestore y localStorage
    const syncTags = (tagsArray: string[]) => {
      setTags(tagsArray);
      localStorage.setItem("tags", JSON.stringify(tagsArray));
    };

    // Verificar si ya hay tags en localStorage
    const savedTags = localStorage.getItem("tags");
    if (savedTags) {
      setTags(JSON.parse(savedTags));
      setLoading(false);
    }

    // Escuchar en tiempo real los cambios en la colección "tags"
    const unsubscribe = onSnapshot(
      collection(db, "tags"),
      (snapshot) => {
        const tagsArray: string[] = [];
        snapshot.forEach((doc) => {
          tagsArray.push(doc.data().name); // Asumiendo que cada tag tiene un campo "name"
        });

        // Actualizar tags en el estado y en localStorage
        syncTags(tagsArray);
        setLoading(false);
      },
      (error) => {
        console.error("Error al escuchar cambios en los tags:", error);
        setError("Error al obtener los tags.");
        setLoading(false);
      }
    );

    // Limpiar la suscripción cuando el componente se desmonta
    return () => unsubscribe();
  }, []);

  return { tags, loading, error };
};
