import { doc, setDoc, collection } from "firebase/firestore"; 
import { db } from "../store/auth/Firebase/Firebase";

export const onlySendNewInfo = async (path, data) => {
  try {
    const newDoc = doc(collection(db,path));
    await setDoc(newDoc, data);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
