import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/config/firebase/Firebase.config";

export const getPlatformDb = (collectionName: string) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const localStorageData = localStorage.getItem(collectionName);
    if (localStorageData) {
      setData(JSON.parse(localStorageData));
      setLoading(false);
    } else {
      fetchDataFromFirestore();
    }
  }, [collectionName]);

  const fetchDataFromFirestore = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, collectionName));
      const fetchedData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(fetchedData);
      localStorage.setItem(collectionName, JSON.stringify(fetchedData));
    } catch (err) {
      setError("Error fetching data from Firestore");
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, refetch: fetchDataFromFirestore };
};
