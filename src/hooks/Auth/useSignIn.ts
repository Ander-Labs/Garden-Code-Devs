import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import {
  auth,
  githubProvider,
} from "@/config/firebase/Firebase.config";

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
    try {
      const result = await signInWithPopup(auth, githubProvider);
      return result.user;
    } catch (error) {
      console.error("Error signing in with GitHub:", error);
      return null;
    }
  };

  return {
    signInWithEmail,
    signInWithGithub,
  };
};

export default useSignIn;
