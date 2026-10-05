/*
1.state initialize
2.action : its a object contains type & payload
3.reducer : main logic
4.store : createStore(), subscribe(), dispatch(), getState()
*/


const {createStore} =require('redux')

const INCREMENT='INCREMENT'
const DECREMENT='DECREMENT'

//state
const initailCounterState={
    count:0
}

//action
const increamentCounter=()=>{
    return {
        type:INCREMENT
    }
}


const deccreamentCounter=()=>{
    return {
        type:DECREMENT
    }
}


//reducer
const counterReducer=(state=initailCounterState,action)=>{
    switch (action.type) {
        case INCREMENT:
            return{
                ...state,
                count:state.count+1
            }
        
        case DECREMENT:
            return{
                ...state,
                count:state.count-1
            }
    
        default:
            state;
    }
}


//store
const store=createStore(counterReducer)

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(increamentCounter())
store.dispatch(increamentCounter())
store.dispatch(increamentCounter())
store.dispatch(increamentCounter())
store.dispatch(deccreamentCounter())
store.dispatch(deccreamentCounter())



