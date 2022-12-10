import { ADD_BLOG, DELETE_BLOG, LOAD_PRODUCT, UPDATE_BLOG } from "../actionTypes/actionTypes"

export const loadBlog = (blog) => {
    return {
        type: LOAD_PRODUCT,
        payload: blog,
    }
}

export const deleteSingleBlog = (blogId) => {
    return {
        type: DELETE_BLOG,
        payload: blogId,
    }
}

export const addSingleBlog = (data) => {
    return {
        type : ADD_BLOG,
        payload: data,
    }
}

export const updateSingleBlog = (blogId) => {
    return {
        type: UPDATE_BLOG,
        payload: blogId,
    }
}