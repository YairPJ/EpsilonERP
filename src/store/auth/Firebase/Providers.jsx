import { doc, setDoc } from '@firebase/firestore';
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, getAuth} from 'firebase/auth';
import { sendInfo } from '../../../helpers/sendInfo';
import { auth, db } from "./Firebase";

const googleProvider = new GoogleAuthProvider();

export const  singInWhitGoogle = async()=>{
    try{
        const result = await signInWithPopup (auth, googleProvider) // ESTA FUNCIONA ES PARA INGRESAR CON GOOGLE - es lo mismo para todos
        const {displayName, email, photoURL, uid} = result.user;
        return{
            ok: true,
            //INFORMACION DEL USUARIO
            displayName,
            email,
            photoURL,
            uid,
        }

    }catch(error){
        console.log(error);
        const errorMessage = error.errorMessage;
        return{
            ok: false,
            errorMessage,

        }
    }
}

export const singWhitEmail=async({email,password})=>{
    try{
        const result = await signInWithEmailAndPassword(auth, email, password);
        const {displayName,photoURL,uid} = result.user;
        return{
            ok: true,
            email,
            displayName,
            photoURL,
            uid,
        }

    }catch(error){
        const errorMesagge = error.message;
        return{
            ok: false,
            errorMesagge: errorMesagge,
        }
    }

}

export const RegisterWhitEmail=async({email,password,displayName,id,companyName})=>{
    const email2=email
    try{
        const resp = await createUserWithEmailAndPassword(auth,email2,password);
        const {uid, photoURL, email}=resp.user
        //ACTUALIZAR LA FOTO Y EL NOMBRE DEL USUARIO
        await updateProfile(auth.currentUser,{displayName}); 
        const path=`/DataUsers/${uid}`;
        const data={Activo: false, Empresa: companyName, id:id}
        await sendInfo(path,data);
        const path2=`/${companyName}/Usuarios/DataUsuarios/${id}`;
        const data2={Active: true, uid: uid};
        await sendInfo(path2,data2);
     
    //VALIDACIONES DE LOS ERRORES DE FIREBASE
    }catch(error){

       const errorMesagge = error.message;
       console.log(errorMesagge);
    }

}

export const LogOutFirebase = async()=>{

    return await auth.signOut();
}
