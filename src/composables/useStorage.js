import { ref } from "vue";
import { storage, uploadBytes, ref as storageRef } from "@/configs/firebase";

const useStorage = (name) => {
  const error = ref(null);
  const filePath = ref(null);
  async function uploadFile(file) {
    filePath.value = `${name}/${file.name}`;
    const fileRef = storageRef(storage, filePath.value);
    try {
      const response = await uploadBytes(fileRef, file);
      return { response };
    } catch (err) {
      error.value = err.message;
    }
  }
  return { error, filePath, uploadFile };
};

export default useStorage;
