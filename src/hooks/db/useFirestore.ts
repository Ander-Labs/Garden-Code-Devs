// src/hooks/db/useFirestore.ts

import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/config/firebase/Firebase.config";

export const useFirestore = () => {
  const getUserData = async (uid: string) => {
    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      return userSnap.data();
    } else {
      return null;
    }
  };

  const createUserData = async (uid: string, userData: any) => {
    const userRef = doc(db, "users", uid);
    await setDoc(userRef, userData);
  };

  return { getUserData, createUserData };
};
