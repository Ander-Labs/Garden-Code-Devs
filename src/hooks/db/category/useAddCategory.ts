// src/hooks/db/category/useAddCategory.ts
import { useState } from "react";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { db } from "@/config/firebase/Firebase.config";
import { Category } from "@/schemas/db/tagsType";

export const useAddCategory = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addCategory = async (category: Category) => {
    setLoading(true);
    setError(null);

    try {
      // Verificar si ya existe la categoría en localStorage
      const savedCategories = localStorage.getItem("categories");
      if (savedCategories) {
        const categoriesArray = JSON.parse(savedCategories) as string[];
        if (categoriesArray.includes(category.name)) {
          throw new Error("Category already exists in local storage");
        }
      }

      // Si no está en localStorage, realizar consulta en Firebase
      const q = query(
        collection(db, "categories"),
        where("name", "==", category.name)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        throw new Error("Category already exists in Firebase");
      }

      // Añadir nueva categoría en Firebase
      await addDoc(collection(db, "categories"), category);

      // Actualizar las categorías en localStorage
      const updatedCategories = savedCategories
        ? [...JSON.parse(savedCategories), category.name]
        : [category.name];
      localStorage.setItem("categories", JSON.stringify(updatedCategories));

      setLoading(false);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to add category");
      console.log("este es el error ", err);
      setLoading(false);
      return false;
    }
  };

  return { addCategory, loading, error };
};
