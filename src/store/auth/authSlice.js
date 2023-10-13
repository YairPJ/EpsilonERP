import { createSlice } from '@reduxjs/toolkit';
export const authSlice = createSlice({
name: 'name',
initialState: {
status: 'not-authenticated',
uid: null,
email: null,
name: null,
photoUrl: null,
errorMesagge: null,
dataUser:[],
derechos: [],
companyName: '',
displayName: '',
},
reducers: {
    login :(state, {payload})=>{
        state.status = 'authenticated';
        state.uid = payload.uid;    
        state.email = payload.email;
        state.name = payload.displayName;
        state.photoUrl = payload.photoURL;
        state.errorMesagge = payload.errorMesagge;

    },
    logOut:(state, {payload})=>{
        console.log(payload);
        state.status = 'not-authenticated';
        state.uid = null;
        state.email = null;
        state.name = null;
        state.photoUrl = null;
        state.errorMesagge = payload.errorMesagge;
        state.dataUser=[];
        state.derechos=[];
    },
    dataUser:(state,action)=>{
        state.dataUser=action.payload;
    },
    asignarDerechos:(state, action)=>{
        state.derechos=action.payload;
    },
    checkUserCompany:(state, action)=>{
        state.companyName=action.payload;
    },
    checkUserDisplayName:(state, action)=>{
        state.displayName=action.payload;
        state.status="revised-information";
        state.errorMesagge="";
    },
    checkingCredentials:(state)=>{
        state.status = 'checking';
    }
}
});
// Action creators are generated for each case reducer function
export const { login, logOut, checkUserCompany, checkUserDisplayName,  checkingCredentials, dataUser, asignarDerechos} = authSlice.actions;