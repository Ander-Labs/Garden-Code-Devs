// src/hooks/db/category/useCategories.ts
import { useEffect, useState } from "react";
import { collection, onSnapshot, getDocs } from "firebase/firestore";
import { db } from "@/config/firebase/Firebase.config";

export const useGetCategories = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Función para sincronizar categorías de Firestore y localStorage
    const syncCategories = (categoriesArray: string[]) => {
      setCategories(categoriesArray);
      localStorage.setItem("categories", JSON.stringify(categoriesArray));
    };

    // Verificar si ya hay categorías en localStorage
    const savedCategories = localStorage.getItem("categories");
    if (savedCategories) {
      setCategories(JSON.parse(savedCategories));
      setLoading(false);
    }

    // Escuchar en tiempo real los cambios en la colección "categories"
    const unsubscribe = onSnapshot(
      collection(db, "categories"),
      (snapshot) => {
        const categoriesArray: string[] = [];
        snapshot.forEach((doc) => {
          categoriesArray.push(doc.data().name); // Asumiendo que cada categoría tiene un campo "name"
        });

        // Actualizar categorías en el estado y en localStorage
        syncCategories(categoriesArray);
        setLoading(false);
      },
      (error) => {
        console.error("Error al escuchar cambios en las categorías:", error);
        setError("Error al obtener las categorías.");
        setLoading(false);
      }
    );

    // Limpiar la suscripción cuando el componente se desmonta
    return () => unsubscribe();
  }, []);

  return { categories, loading, error };
};
