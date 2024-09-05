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
      // Check if tags already exists
      const q = query(
        collection(db, "tags"),
        where("name", "==", tag.name)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        throw new Error("Tag already exists");
      }

      // Add new Tag without specifying "id" (Firebase will generate it)
      await addDoc(collection(db, "tags"), tag);

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
