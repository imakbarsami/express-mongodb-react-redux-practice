const { default: axios } = require("axios")
const { applyMiddleware } = require("redux")
const { createStore } = require("redux")
const { thunk } = require("redux-thunk")

// constant
const GET_TODOS='GET_TODOS'
const REQUEST_SUCCESS='REQUEST_SUCCESS'
const REQUEST_FAIELD='REQUEST_FAIELD'
const API_URL='https://jsonplaceholder.typicode.com/todos'

//state
const initialTodos={
    todos:[],
    isLoading:false,
    error:null
}

const getTodos=()=>{
    return{
        type:GET_TODOS
    }
}

const requestSuccess=(todos)=>{
    return{
        type:REQUEST_SUCCESS,
        payload:todos
    }
}

const requestFailed=(error)=>{
    return{
        type:REQUEST_FAIELD,
        payload:error
    }
}


const todosReducer=(state=initialTodos,action)=>{

    switch (action.type) {
        case GET_TODOS:
            return{
                ...state,
                isLoading:true
            }
            
        case REQUEST_SUCCESS:
            return{
                ...state,
                isLoading:false,
                todos:action.payload
            }

        case REQUEST_FAIELD:
            return{
                ...state,
                isLoading:false,
                error:action.payload
            }
    
        default:
            return state;
    }
}


// fetch api
const fetchData=()=>{
    return (dispatch)=>{
        dispatch(getTodos())
        axios.get(API_URL)
        .then(res=>{
            // const todos=res.data.map(todo=>{
            //     return{
            //         id:todo.id,
            //         title:todo.title
            //     }
            // })
            dispatch(requestSuccess(res.data))     
        })
        .catch(error=>{
            dispatch(requestFailed(error.message))
        })
    }
}



// store
const store=createStore(todosReducer,applyMiddleware(thunk))
store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(fetchData())