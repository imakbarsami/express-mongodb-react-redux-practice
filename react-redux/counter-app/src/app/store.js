import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../app/fetaures/counter/counterSlice'

export const counterStore=configureStore({
    reducer:{
        counter:counterReducer
    }
})