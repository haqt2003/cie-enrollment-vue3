import { ref } from "vue";
import { db, collection, addDoc } from "@/configs/firebase";

const useCollection = (name) => {
  const error = ref(null);

  async function addRecord(record) {
    error.value = null;
    try {
      const response = await addDoc(collection(db, name), record);
      if (!response) throw new Error("Có lỗi");
      return { response };
    } catch (err) {
      error.value = err.message;
    }
  }
  return { error, addRecord };
};

export default useCollection;
