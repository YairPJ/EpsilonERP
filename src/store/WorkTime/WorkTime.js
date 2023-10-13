import { createSlice } from '@reduxjs/toolkit';
export const WorkTimeSlice = createSlice({
name: 'WorkTime',
initialState: {
start: '',
startLunch: '',
finishLunch: '',
end: '',
workedTime: '',
isLoading: true,
},
reducers: {
    inicioDeJornada: (state, action)=>{
        state.start=action.payload;
    },
    salidaComer: (state, action)=>{
        state.startLunch=action.payload;
    },
    entradaComida: (state, action)=>{
        state.finishLunch=action.payload;
    },
    finalizarJornada: (state, action)=>{
        state.end=action.payload;
    },
    tiempoDeTrabajo: (state, action)=>{
        state.workedTime=action.payload;
    },
    setIsLoading:(state, action)=>{
        state.isLoading=action.payload;
    },
    cleanWorkTimeData: (state)=>{
        state.start='',
        state.startLunch='',
        state.finishLunch='',
        state.end='',
        state.workedTime=''
    },
}
});
// Action creators are generated for each case reducer function
export const { inicioDeJornada, salidaComer, entradaComida, 
    finalizarJornada, tiempoDeTrabajo, setIsLoading, cleanWorkTimeData } = WorkTimeSlice.actions;