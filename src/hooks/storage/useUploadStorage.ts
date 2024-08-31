//src/hooks/storage/useUploadStorage.ts

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const useUploadStorage = () => {
  const uploadImage = async (file: File, folder: string) => {
    try {
      const storage = getStorage();
      const storageRef = ref(storage, `${folder}/${file.name}`); // Asigna la carpeta correspondiente
      const snapshot = await uploadBytes(storageRef, file);
      const url = await getDownloadURL(snapshot.ref);
      return url; // Esta URL puede almacenarse en Firestore
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error; // Lanza el error para que pueda ser manejado en el componente
    }
  };

  return {
    uploadImageWebs: (file: File) => uploadImage(file, "webs"),
    uploadImageRepos: (file: File) => uploadImage(file, "repos"),
    uploadImageInfluencers: (file: File) => uploadImage(file, "influencers"),
  };
};

export default useUploadStorage;
