import { collection, getDocs } from "@firebase/firestore";
import { db } from "../store/auth/Firebase/Firebase";

export const loadInfo=async(path)=>{
    const data=[];
    const collectionRef=collection(db,path);
    const docs = await getDocs(collectionRef);
    docs.forEach(doc=>{
        data.push({...doc.data()});
    });
    return data;
}