import { REQUEST_FAILED, REQUEST_SUCCESS, REQUEST_TODO } from "../constant/todoConstant";

const initalTodo={
    todo:[],
    isLoading:false,
    error:null
}

export const todoReducer=(state=initalTodo,action)=>{
    switch (action.type) {
        case REQUEST_TODO:

            return{
                ...state,
                isLoading:true
            }

        case REQUEST_SUCCESS:
                   
            return{
                ...state,
                todo:action.payload,
                isLoading:false
            }

        case REQUEST_FAILED:
                   
            return{
                todo:[],
                isLoading:false,
                error:action.payload
            }
    
        default:
            return state;
    }
}