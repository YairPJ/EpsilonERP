import { collection, getDocs } from "firebase/firestore";
import { db } from "../store/auth/Firebase/Firebase";

export const downloadInformationFromFirebase = async (path) => {
    const querySnapshot = await getDocs(collection(db, path));
    const data={};
    querySnapshot.forEach((doc) => {
      data[doc.id] = doc.data();
    });
    return data;
};
