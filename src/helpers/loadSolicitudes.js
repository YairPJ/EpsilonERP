import { collection, getDocs } from "@firebase/firestore";
import { db } from "../store/auth/Firebase/Firebase";

export const loadNotes=async()=>{
    const newSolicitudes=[];
    const collectionRef=collection(db,"EPSILON SA DE CV","ERP","Solicitudes");
    const docs = await getDocs(collectionRef);
    docs.forEach(doc=>{
        newSolicitudes.push({id:doc.id, ...doc.data()});
    });
    return newSolicitudes;
}