import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase/Firebase.config";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/config/firebase/Firebase.config";
import { Timestamp } from "firebase/firestore";

const useSignUp = () => {
  const signUpWithEmail = async (
    email: string,
    password: string,
    displayName: string,
    githubUserName?: string
  ) => {
    try {
      // Crear usuario con email y contraseña
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Crear documento en Firestore con la información del usuario
      await setDoc(doc(db, "users", user.uid), {
        userId: user.uid,
        email: user.email,
        displayName: displayName,
        githubUserName: githubUserName || "",
        createdAt: Timestamp.now(),
        roles: ["user"],
      });

      return user;
    } catch (error) {
      console.error("Error signing up:", error);
      return null;
    }
  };

  return {
    signUpWithEmail,
  };
};

export default useSignUp;
