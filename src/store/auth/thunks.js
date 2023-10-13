import { asignarDerechos, checkingCredentials, checkUserCompany, checkUserDisplayName, dataUser, login, logOut } from "./authSlice"
import { singInWhitGoogle,RegisterWhitEmail,singWhitEmail, LogOutFirebase } from "./Firebase/Providers";
import {cleanSolicitud} from '../erpApp/Solicitud';
import { doc, getDoc} from "firebase/firestore"; 
import { db } from "./Firebase/Firebase";
import { cleanWorkTimeData } from "../WorkTime/WorkTime";
import { loadInfoDoc } from "../../helpers/loadInfoDoc";


export const checkingAuth=(email, password)=>{
    return async(dispatch)=>{
        dispatch(checkingCredentials());
    }
}


//ASI DE DECLARA CADA UNO Y SE NECESITA UNO PARA CADA ACCION(FUNCION)

export const startGoogleSingIn=()=>{
    return async(dispatch)=>{
        dispatch(checkingCredentials());
        const result = await singInWhitGoogle();
        if(!result.ok){
            return dispatch(logOut(result.errorMessage)); //SIEMPRE DEBE IR UN RETURN
        }else{
            dispatch(login(result));
        }
    }
}

export const startSignInEmail=(email,password)=>{
    return async(dispatch)=>{
        dispatch(checkingCredentials());
        const resp = await(singWhitEmail({email,password}))
        if(!resp.ok){
            return dispatch(logOut(resp));
        }else{
            dispatch(login(resp));
        }

}
}

export const startCreateUserWhitEmailAndPassword=(password,email,displayName,id)=>{
    return async(dispatch, getState)=>{
        const {companyName} = getState().auth;
        dispatch(checkingCredentials());
                const {ok} = await(RegisterWhitEmail({email,password,displayName,id,companyName}));
                if(!ok)return dispatch(logOut({errorMesagge}));
                
        }
}

export const startCheckDataUser=()=>{
    return async(dispatch, getState)=>{
        const {uid} = getState().auth;
        const docRef = doc(db, "DataUsers", uid);
        const data = await getDoc(docRef);
        dispatch(dataUser(data.data()));
    }
}

export const startAsignarDerechos=()=>{
    return async(dispatch, getState)=>{
        const {dataUser}=getState().auth;
        const Empresa=dataUser.Empresa;
        const id = dataUser.id;
        const path =`/${Empresa}/Usuarios/Derechos/${id}`
        const derechos = await loadInfoDoc(path);
        dispatch(asignarDerechos(derechos));
    }
}

export const startLogOutWhitFirebase=()=>{
    return async(dispatch)=>{
        const errorMesagge = "";
        await LogOutFirebase();
        dispatch(logOut({errorMesagge}));
        dispatch(cleanSolicitud());
        dispatch(cleanWorkTimeData());
    }
}

export const startCheckUserCompany=(company, id)=>{
    return async(dispatch)=>{
        const path=`/IDCompanys/${company}`
        const resp1 = await loadInfoDoc(path);
        if(resp1){
            const path2=`/${resp1.Nombre}/Usuarios/DataUsuarios/${id}`;
            const resp2 = await loadInfoDoc(path2);
            if(!resp2){
                const errorMesagge="El id de usuario no existe!!!"
                dispatch(logOut({errorMesagge}));
            }else{
            if(!resp2.Active){
                const displayName = resp2.Nombre;
                const compnayName = resp2.Empresa;
                dispatch(checkUserCompany(compnayName));
                dispatch(checkUserDisplayName(displayName));
            }else{
                const errorMesagge="El usuario ya se encuentra activo!!!"
                dispatch(logOut({errorMesagge}));
            }
        }
        }else{
            const errorMesagge="El id de la compañia y/o empleado no existe!!!"
            dispatch(logOut({errorMesagge}));
        }
    }
}