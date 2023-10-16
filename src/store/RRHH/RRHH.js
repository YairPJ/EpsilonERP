import { createSlice } from '@reduxjs/toolkit';
export const RRHHSlice = createSlice({
name: 'RRHH',
initialState: {
vacantesActivas:{},
isLoading: false,
active: '',
},
reducers: {
setVacantes:(state, action)=>{
    state.vacantesActivas=action.payload;
},
setIsLoading:(state,action)=>{
    state.isLoading=action.payload;
},
setActive:(state,action)=>{
    state.active=action.payload;
}

}
});
// Action creators are generated for each case reducer function
export const { setVacantes,setIsLoading,setActive } = RRHHSlice.actions;