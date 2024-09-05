// src/hooks/db/category/useCategories.ts
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/config/firebase/Firebase.config";

export const useGetTags = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        setError(null);

        // Verificar si ya hay categorías en localStorage
        const savedTags = localStorage.getItem("tags");
        if (savedTags) {
          setTags(JSON.parse(savedTags));
          setLoading(false);
          return;
        }

        // Si no están en localStorage, consultarlas de Firestore
        const querySnapshot = await getDocs(collection(db, "tags"));
        const categoriesArray: string[] = [];
        querySnapshot.forEach((doc) => {
          categoriesArray.push(doc.data().name); // Asumiendo que cada categoría tiene un campo "name"
        });

        // Guardar las categorías en el estado y en localStorage
        setTags(categoriesArray);
        localStorage.setItem("categories", JSON.stringify(categoriesArray));
      } catch (error) {
        setError("Error al obtener las categorías.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { tags, loading, error };
};
