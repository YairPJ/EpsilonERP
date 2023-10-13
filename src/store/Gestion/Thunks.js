
import { loadInfo } from "../../helpers/loadInfo";
import { loadInfoCollections } from "../../helpers/loadInfoCollections";
import { loadInfoDoc } from "../../helpers/loadInfoDoc";
import { setData, setDataUsuarios, setIsLoading, setUserActive, setUserActiveDerechos } from "./Gestion";
import { showMessage } from "../HomeReducer/Home";
import { sendInfo } from "../../helpers/sendInfo";

export const startLoadingData=()=>{
    return async(dispatch,getState)=>{
        const {dataUser} = getState().auth;
        const empresa=dataUser.Empresa;
        const path = `/${empresa}/Info/InformacionDeLaEmpresa`;
        const data=await loadInfo(path);
        dispatch(setData(data));

    }
}

export const starLoadingEmpleados=()=>{
    return async(dispatch,getState)=>{
        const {dataUser} = getState().auth;
        const empresa=dataUser.Empresa;
        const path1="Usuarios";
        const path2="DataUsuarios"
        const data = await loadInfoCollections(empresa,path1,path2);
        dispatch(setDataUsuarios(data));
    }
}

export const startLoadingDerechosEmpleado=()=>{
    return async(dispatch,getState)=>{
        const {userActive}=getState().gestion;
        const {dataUser} = getState().auth;
        const empresa=dataUser.Empresa;
        const id=userActive.id;
        const path = `/${empresa}/Usuarios/Derechos/${id}`;
        const dataDerechos=await loadInfoDoc(path);
        dispatch(setUserActiveDerechos(dataDerechos));
    }
}

export const startUpdateUserInformation=(data, collectionUpdate)=>{
    return async(dispatch,getState)=>{
        dispatch(setIsLoading(true));
        const {dataUser} = getState().auth;
        const {userActive}=getState().gestion;
        const empresa=dataUser.Empresa;
        const id=userActive.id;
        const path=`/${empresa}/Usuarios/${collectionUpdate}/${id}`;
        const response = await sendInfo(path,data);
        if(response){
            dispatch(setIsLoading(false));
            dispatch(showMessage(['success',`${collectionUpdate} actualizado correctamente`]))
        }else{
            dispatch(showMessage(['error',response]));
        }
    }
}

export const cleanUserActive=()=>{
    return async(dispatch)=>{
        setUserActive("");
    }
}




