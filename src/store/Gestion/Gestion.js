import { createSlice } from '@reduxjs/toolkit';
export const GestionSlice = createSlice({
name: 'gestion',
initialState: {
    data: [],
    dataUsuarios: [],
    isLoading: false,
    userActiveDerechos: [],
    userActive: [],
    message: [],
    },
reducers: {
setData: (state, action)=>{
    state.isLoading=true;
    state.data=action.payload;
    state.isLoading=false;
},
setDataUsuarios:(state,action)=>{
    state.dataUsuarios=action.payload;

},
setUserActive:(state,action)=>{
    state.userActive=action.payload;
},
setUserActiveDerechos:(state, action)=>{
    state.userActiveDerechos=action.payload;
},
updateUserActive:(state, action)=>{
    state.userActive=action.payload;
},
updateUserActiveDerechos:(state, action)=>{
    state.userActiveDerechos=action.payload;
},
setIsLoading:(state,action)=>{
    state.isLoading=action.payload;
},


}
});
// Action creators are generated for each case reducer function
export const { setData, setDataUsuarios, setUserActive, 
    setUserActiveDerechos,updateUserActive,updateUserActiveDerechos,setIsLoading } = GestionSlice.actions;