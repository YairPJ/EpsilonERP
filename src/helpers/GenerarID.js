import { doc, getDoc, setDoc } from "@firebase/firestore";
import { auth, db } from "../store/auth/Firebase/Firebase";

export const GenerarID = async (company) => {
    const path = `/${company}/Usuarios/DataMaster/IDUsuarios`;
    const documentRef = doc(db, path);

    try {
        const docSnap = await getDoc(documentRef);
        if (docSnap.exists()) {
            const LIDAS = docSnap.data().LIDAS;
            const NewLIDAS = parseInt(LIDAS) + 1;
            const ActualLIDAS = NewLIDAS + 2;
            const data={"LIDAS":ActualLIDAS}
            try {
                await setDoc(doc(db, path), data, { merge: true });
                return NewLIDAS;
              } catch (error) {
                return false;
              }
        } else {
            return null;
        }
    } catch (error) {
        return null;
    }
};
