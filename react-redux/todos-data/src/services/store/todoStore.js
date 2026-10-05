import { applyMiddleware, createStore } from 'redux'
import { todoReducer } from '../reducer/todoReducer'
import { thunk } from 'redux-thunk'

export const todoStore=createStore(todoReducer,applyMiddleware(thunk))