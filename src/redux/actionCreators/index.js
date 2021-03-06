import {
    ADD_PRODUCTS,
    LOADING_TRUE,
    LOADING_FALSE,
    PUSH_PRODUCTS,
    DELETE_PRODUCTS
} from '../actionTypes'

export const setLoadingFalse = () => ({type: LOADING_FALSE})
export const setLoadingTrue = () => ({type: LOADING_TRUE})
export const addProducts = (payload) => ({type: ADD_PRODUCTS, payload})
export const pushProducts = (payload) => ({type: PUSH_PRODUCTS, payload})
export const deleteTodo = (payload) => ({type: DELETE_PRODUCTS, payload});
