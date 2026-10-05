import {configureStore} from '@reduxjs/toolkit'
import postReducer from '../app/features/posts/postSlice'

export const store=configureStore({
    reducer:{
        posts:postReducer
    }
})