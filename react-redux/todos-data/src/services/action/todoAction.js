import axios from "axios"
import { API_URL, REQUEST_FAILED, REQUEST_SUCCESS, REQUEST_TODO } from "../constant/todoConstant"

export const getAllTodos=()=>

        async(dispatch)=>{
        dispatch({type:REQUEST_TODO})

        try {
            const res=await axios.get(API_URL)
            // console.log(res.data);   
            dispatch({type:REQUEST_SUCCESS,payload:res.data})
        } catch (error) {
            dispatch({type:REQUEST_FAILED,payload:error.message})
        }
    }
