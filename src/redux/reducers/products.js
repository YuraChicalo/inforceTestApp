import {
    ADD_PRODUCTS,
    LOADING_TRUE,
    LOADING_FALSE,
    PUSH_PRODUCTS,
    DELETE_PRODUCTS
} from '../actionTypes'

const initialState = {
    products: [],
    productsLoading: false,
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCTS: {
            return {...state, products: action.payload}
        }
        case LOADING_TRUE: {
            return {...state, productsLoading: true}
        }
        case LOADING_FALSE: {
            return {...state, productsLoading: false}
        }
        case PUSH_PRODUCTS: {
            return {...state, products: [...state.products, action.payload]}
        }
        case DELETE_PRODUCTS: {
            return {...state, products: state.products.filter(todo => todo.id !== action.payload)}
        }
        default:
            return state
    }
}
