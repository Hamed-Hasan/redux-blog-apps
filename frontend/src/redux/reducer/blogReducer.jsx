import { ADD_BLOG, DELETE_BLOG, LOAD_PRODUCT, UPDATE_BLOG } from "../actionTypes/actionTypes";

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
        case ADD_BLOG:
            return {
                ...state,
                blogs: [...state.blogs, action.payload]
            }
        case UPDATE_BLOG:
            const updatedBlog = state.blogs.map((blog) => {
                if(blog._id === action.payload._id) {
                    return { ...action };
                }
                return blog
            })
            return { ...state, blogs: updatedBlog };
        default:
            return state;
    }
}