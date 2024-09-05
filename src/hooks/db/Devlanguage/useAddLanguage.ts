// src/hooks/db/DevLenguage/useAddLenguage.ts
import { useState } from "react";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { db } from "@/config/firebase/Firebase.config";
import { ProgrammingLanguage } from "@/schemas/db/tagsType";

export const useAddLenguage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addLenguage = async (lenguage: ProgrammingLanguage) => {
    setLoading(true);
    setError(null);

    try {
      // Check if lenguage already exists
      const q = query(
        collection(db, "Language"),
        where("name", "==", lenguage.name)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        throw new Error("Tag already exists");
      }

      // Add new Tag without specifying "id" (Firebase will generate it)
      await addDoc(collection(db, "Language"), lenguage);

      setLoading(false);

      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to add Tag");
      console.log("este es el error ", err);
      setLoading(false);
      return false;
    }
  };

  return { addLenguage, loading, error };
};
