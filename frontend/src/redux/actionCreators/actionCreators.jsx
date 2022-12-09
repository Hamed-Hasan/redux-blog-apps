import { LOAD_PRODUCT } from "../actionTypes/actionTypes"

export const loadBlog = (blog) => {
    return {
        type: LOAD_PRODUCT,
        payload: blog,
    }
}