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
      // Check if category already exists
      const q = query(
        collection(db, "categories"),
        where("name", "==", category.name)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        throw new Error("Category already exists");
      }

      // Add new category without specifying "id" (Firebase will generate it)
      await addDoc(collection(db, "categories"), category);

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
