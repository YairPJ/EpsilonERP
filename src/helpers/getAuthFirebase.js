import { getFirestore, collection, where, getDocs, query } from "firebase/firestore";

export const getAuthFirebase = async (email) => {
  try {
    const db = getFirestore();
    const usersCollection = collection(db, "DataUsers");

    const q = query(usersCollection, where("Email", "==", email));

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];
      const uid = userDoc.id;
      return uid;
    } else {
      return null;
    }
  } catch (error) {
      return error;
  }
};
