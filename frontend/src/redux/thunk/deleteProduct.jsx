import { deleteSingleBlog } from "../actionCreators/actionCreators";

const deleteBlog = (blogId)  => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://redux-blog-application.onrender.com/product/${blogId}`, { 
            method: 'DELETE', 
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json();
        if(data.acknowledged) {
            dispatch(deleteSingleBlog(blogId))
        }
    }
}

export default deleteBlog;