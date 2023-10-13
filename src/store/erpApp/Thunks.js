import { collection, doc, setDoc, deleteDoc } from "firebase/firestore";
import { loadNotes } from "../../helpers/loadSolicitudes";
import { db } from "../auth/Firebase/Firebase";
import { addSolicitud, creatingNewSolicitud, deleteSolicitud, setEmpleados, setSaving } from "./Solicitud";
import { showMessage } from "../HomeReducer/Home";
import { loadInfoCollections } from "../../helpers/loadInfoCollections";


export const startNewSolicitud = (newSolicitud) => {
    return async (dispatch, getState) => {
        dispatch(creatingNewSolicitud());
        const { uid } = getState().auth;

        try {
            const newDoc = doc(collection(db,"EPSILON SA DE CV", "ERP", "Solicitudes"));
            const resp = await setDoc(newDoc, newSolicitud);
            newSolicitud.id = newDoc.id;
            dispatch(addSolicitud(newSolicitud));
            dispatch(showMessage(['success', 'La solicitud ha sido enviada exitosamente!!!']));
        } catch (error) {
            dispatch(showMessage(['error: ',error]));
        }
    };
}


export const startLoadingSolicitudes=()=>{
    return async(dispatch,getState)=>{
        const {uid} = getState().auth;
        if(!uid){
            throw new Error("El uid no es valido");
        }
        const newSolicitudes = await loadNotes();
        dispatch(setSaving(newSolicitudes));

    }
}

export const startDelete=()=>{
    return async(dispatch,getState)=>{
        const {uid} = getState().auth;
        const {active: solicitud}=getState().solicitud;
        const docRef = doc(db, "EPSILON SA DE CV","ERP","Solicitudes",solicitud.id);
        await deleteDoc(docRef);
        dispatch(deleteSolicitud(solicitud.id));
        dispatch(showMessage(['info','La solicitud ha sido eliminada']))

    }
}

export const startConsultEmpleados=()=>{
    return async(dispatch,getState)=>{
        const{dataUser} = getState().auth;
        const company=dataUser.Empresa;
        const path1="Usuarios";
        const path2="DataUsuarios"
        const data = await loadInfoCollections(company,path1,path2);
        dispatch(setEmpleados(data));
    }
}
