import { DELETE_BLOG, LOAD_PRODUCT } from "../actionTypes/actionTypes";

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
        case DELETE_BLOG: 
        return {
            ...state,
            blogs: state.blogs.filter((blog) => blog._id !== action.payload)
        }   
        default:
            return state;
    }
}