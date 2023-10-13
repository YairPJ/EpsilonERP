import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../store/auth/Firebase/Firebase";

export const sendInfo = async (path, data) => {
  try {
    await setDoc(doc(db, path), data, { merge: true });
    return true;
  } catch (error) {
    return false;
  }
};
