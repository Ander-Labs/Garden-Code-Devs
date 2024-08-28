// src/hooks/Auth/useSignIn.ts
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";

import {
  auth,
  // githubAuthProvider,
  db,
} from "@/config/firebase/Firebase.config";
import { doc, getDoc, setDoc } from "firebase/firestore";

const useSignIn = () => {
  const signInWithEmail = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential.user;
    } catch (error) {
      console.error("Error signing in with email:", error);
      return null;
    }
  };

  const signInWithGithub = async () => {
    const githubAuthProvider = new GithubAuthProvider();
    githubAuthProvider.addScope("user:email");
    githubAuthProvider.addScope("read:user");

    try {
      const result = await signInWithPopup(auth, githubAuthProvider);
      const user = result.user;

      // Verifica si el token de GitHub está presente
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;

      // Envía el token al API route para almacenar en la cookie
      await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      // Obtener los datos necesarios de GitHub
      const userData = {
        uid: user.uid,
        displayName: user.displayName || "Anonymous",
        email: user.email,
        photoURL: user.photoURL,
        githubUsername: user.displayName
          ? user.displayName.split(" ")[0]
          : "Anonymous", // GitHub username correcto
      };

      // Guardar los datos del usuario en Firestore
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        // Si el usuario no está registrado, agregarlo a Firestore
        await setDoc(userRef, {
          ...userData,
          role: "user", // Asignar rol por defecto
          createdAt: new Date(),
        });
        console.log("Usuario registrado en Firestore:", userData);
      } else {
        console.log("Usuario ya registrado en Firestore");
      }

      return user;
    } catch (error: any) {
      console.error("Error al iniciar sesion con GitHub:", error);

      return null;
    }
  };

  return {
    signInWithEmail,
    signInWithGithub,
  };
};

export default useSignIn;
