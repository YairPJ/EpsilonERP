

import { loadInfoCollections } from "../../helpers/loadInfoCollections";
import { setActive, setIsLoading, setVacantes } from "./RRHH";


export const startSetVacantesActivas=()=>{
    return async(dispatch,getState)=>{
        dispatch(setIsLoading(true));
        const {dataUser}=getState().auth;
        const company = dataUser.Empresa;
        const data = await loadInfoCollections(company,"ERP","Vacantes");
        if(data){
            dispatch(setVacantes(data));
            dispatch(setIsLoading(false));
        }else{
            dispatch(setIsLoading(false));
        }
    }
}

export const startDeleteVacante=()=>{
    return async(dispatch,getState)=>{

    }
}

export const startActiveVacante=(active)=>{
    return async(dispatch,getState)=>{
        dispatch(setActive(active));
    }
}

export const cleanVacante=()=>{
    return async(dispatch,getState)=>{
        dispatch(setActive(""));
    }
}
