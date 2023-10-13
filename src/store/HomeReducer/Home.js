import { createSlice } from '@reduxjs/toolkit';
export const homeSlice = createSlice({
name: 'home',
initialState: {
message: [],
},
reducers: {

    showMessage:(state, action)=>{
        state.message=action.payload;
    },
    clearMessage: (state) => {
        state.message = [];
      },



}
});
// Action creators are generated for each case reducer function
export const { showMessage, clearMessage } = homeSlice.actions;