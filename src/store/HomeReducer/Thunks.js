import { showMessage } from "./Home";

export const startShowMessage=(info)=>{
    return async(dispatch)=>{
        dispatch(showMessage(info));
    }
}
