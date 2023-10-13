import { collection, getDocs, query } from "@firebase/firestore";
import { db } from "../store/auth/Firebase/Firebase";

export const loadInfoCollections = async (empresa,path1,path2) => {
    const data=[];
    const collectionRef=query(collection(db,empresa,path1,path2));
    const docs = await getDocs(collectionRef);
    docs.forEach(doc=>{
        data.push({uid: doc.id, ...doc.data()});
    });
    return data;
};
