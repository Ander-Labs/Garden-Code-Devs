// src/hooks/db/tags/useAddtags.ts
import { useState } from "react";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { db } from "@/config/firebase/Firebase.config";
import { Tag } from "@/schemas/db/tagsType";

export const useAddTags = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addTag = async (tag: Tag) => {
    setLoading(true);
    setError(null);

    try {
      // Verificar si ya existe el tag en localStorage
      const savedTags = localStorage.getItem("tags");
      if (savedTags) {
        const tagsArray = JSON.parse(savedTags) as string[];
        if (tagsArray.includes(tag.name)) {
          throw new Error("Tag already exists in local storage");
        }
      }

      // Si no está en localStorage, realizar consulta en Firebase
      const q = query(collection(db, "tags"), where("name", "==", tag.name));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        throw new Error("Tag already exists in Firebase");
      }

      // Añadir nuevo tag en Firebase
      await addDoc(collection(db, "tags"), tag);

      // Actualizar los tags en localStorage
      const updatedTags = savedTags
        ? [...JSON.parse(savedTags), tag.name]
        : [tag.name];
      localStorage.setItem("tags", JSON.stringify(updatedTags));

      setLoading(false);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to add Tag");
      console.log("este es el error ", err);
      setLoading(false);
      return false;
    }
  };

  return { addTag, loading, error };
};
