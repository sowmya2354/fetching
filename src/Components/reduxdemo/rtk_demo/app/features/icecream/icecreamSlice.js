import { createSlice } from "@reduxjs/toolkit";
const initialState={
    noOfIcecreams:20
}
export const icecreamSlice=createSlice({
    name:'icecream',
    initialState,
    reducers:{
        sellIceCream:(state,action)=>{
            state.noOfIcecreams -= action.payload
        },
        addIceCream:(state,action)=>{
            state.noOfIcecreams +=action.payload
        }
    }
})
export const {sellIceCream,addIceCream}=icecreamSlice.actions
export default icecreamSlice.reducer;