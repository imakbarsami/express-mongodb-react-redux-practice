const { createStore, combineReducers, applyMiddleware } = require("redux")
const { default: logger } = require("redux-logger")


// constant
const ADD_PRODUCT='ADD_PRODUCT'
const GET_PRODUCTS='GET_PRODUCTS'
const ADD_CART_ITEMS='ADD_CART_ITEMS'
const GET_CART_ITEMS='GET_CART_ITEMS'

// state
const initalProducts={
    products:['pen','pencil'],
    count:2
}


// action
const getProducts=()=>{
    return{
        type:GET_PRODUCTS
    }
}

const addProduct=(value)=>{
    return{
        type:ADD_PRODUCT,
        payload:value
    }
}


// reducer
const productReducer=(state=initalProducts,action)=>{
    switch (action.type) {
        case ADD_PRODUCT:
            return{
                products:[...state.products,action.payload],
                count:state.count+1
            }
        
        case GET_PRODUCTS:
            return {
                ...state
            }
    
        default:
            return state;
    }
}


// state for cart
const initialCart={
    products:['door','bag','socket'],
    count:3
}

// action for cart
const getCart=()=>{
    return{
        type:GET_CART_ITEMS
    }
}

const addCart=(product)=>{
    return{
        type:ADD_CART_ITEMS,
        payload:product
    }
}


// reducer for cart
const cartReducer=(state=initialCart,action)=>{
    switch (action.type) {
        case GET_CART_ITEMS:
            return {
                ...state
            }
        
        case ADD_CART_ITEMS:
            return{
                products:[...state.products,action.payload],
                count:state.count+1
            }
    
        default:
            return state;
    }
}


const rootReducer={
    prodcutR:productReducer,
    cartR:cartReducer
}

// store
const store=createStore(combineReducers(rootReducer),applyMiddleware(logger))

store.subscribe(()=>{
    console.log(store.getState());
    
})

store.dispatch(getProducts())
store.dispatch(addProduct('Eraser'))
store.dispatch(addProduct('Milk'))
store.dispatch(getCart())
store.dispatch(addCart('window'))