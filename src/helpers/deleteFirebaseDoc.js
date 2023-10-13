import {doc, deleteDoc } from "firebase/firestore";
import { db } from "../store/auth/Firebase/Firebase";

export const deleteFirebaseDoc = async(path)=>{
    await deleteDoc(doc(db,path));
}