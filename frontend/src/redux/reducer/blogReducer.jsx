import { LOAD_PRODUCT } from "../actionTypes/actionTypes";

const initialState = {
    blogs: [],
    cart: [],
}

export const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PRODUCT:
            return {
                ...state,
                blogs: [...state.blogs, action.payload]
            }
            
        default:
            return state;
    }
}