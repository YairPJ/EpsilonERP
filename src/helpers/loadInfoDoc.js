import { doc, getDoc } from "@firebase/firestore";
import { db } from "../store/auth/Firebase/Firebase";

export const loadInfoDoc = async (path) => {
    const docRef = doc(db, path);
    const snapshotDocumento = await getDoc(docRef);

    if (snapshotDocumento.exists()) {
        return(snapshotDocumento.data());
    } else {
        return false;
    }
}
