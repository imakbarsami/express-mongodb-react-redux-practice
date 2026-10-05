import { createSlice } from '@reduxjs/toolkit'

export const counterSlice=createSlice({
    name:'counter',
    initialState:{count:0},
    reducers:{
        increment:(state)=>{
            state.count+=1
        },
        decrement:(state)=>{
            if(state.count<1){
                state.count=0
                return
            }
            state.count-=1
        },
        reset:(state)=>{state.count=0},
        countByAmount:(state,action)=>{
            state.count+=action.payload
        }
    }
})

export const {increment,decrement,reset,countByAmount}=counterSlice.actions
export default counterSlice.reducer