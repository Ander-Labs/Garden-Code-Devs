// src/hooks/db/category/useCategories.ts
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/config/firebase/Firebase.config";

export const useGetCategories = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        setError(null);

        // Verificar si ya hay categorías en localStorage
        const savedCategories = localStorage.getItem("categories");
        if (savedCategories) {
          setCategories(JSON.parse(savedCategories));
          setLoading(false);
          return;
        }

        // Si no están en localStorage, consultarlas de Firestore
        const querySnapshot = await getDocs(collection(db, "categories"));
        const categoriesArray: string[] = [];
        querySnapshot.forEach((doc) => {
          categoriesArray.push(doc.data().name); // Asumiendo que cada categoría tiene un campo "name"
        });

        // Guardar las categorías en el estado y en localStorage
        setCategories(categoriesArray);
        localStorage.setItem("categories", JSON.stringify(categoriesArray));
      } catch (error) {
        setError("Error al obtener las categorías.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
};
