import { applyMiddleware, combineReducers, configureStore } from '@reduxjs/toolkit'
import { inputValueReducer } from './reducers'
import thunk from 'redux-thunk'

export const store = configureStore({
    reducer: combineReducers({ inputReducer: inputValueReducer }),
    middleware: [thunk],
})
