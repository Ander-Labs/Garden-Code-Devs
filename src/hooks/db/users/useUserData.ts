// src/hooks/db/users/useUserData.ts
import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/config/firebase/Firebase.config";

export const useUserData = (userId: string | undefined) => {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) return;

    setLoading(true);
    setError(null);

    // Cargar datos desde localStorage al iniciar
    const savedData = localStorage.getItem("userData");
    if (savedData) {
      setUserData(JSON.parse(savedData));
      setLoading(false);
    }

    // Crear la suscripción a Firestore usando onSnapshot
    const unsubscribe = onSnapshot(
      doc(db, "users", userId),
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.data();
          setUserData(data);

          // Guardar los datos actualizados en localStorage
          localStorage.setItem("userData", JSON.stringify(data));
        } else {
          setError("User data not found");
        }
        setLoading(false);
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      }
    );

    // Cleanup de la suscripción cuando el componente se desmonta
    return () => unsubscribe();
  }, [userId]);

  return { userData, loading, error };
};
