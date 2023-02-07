import { createSlice } from "@reduxjs/toolkit";


const cart=createSlice({

    name:"cart",
    initialState:{
        items:["banana","Mango"],
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.items.pop();
        },
        clearInterval:(state)=>{
            state.items=[];
        }
    }
})

export const {addItem,removeItem,clearInterval}=cart.actions;

export default cart.reducer;