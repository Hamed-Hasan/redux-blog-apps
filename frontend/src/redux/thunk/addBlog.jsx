import { addSingleBlog } from "../actionCreators/actionCreators";

const addBlog = (blog) => {
    return async (dispatch, getState) => {
        const res = await fetch('http://localhost:5000/product', {
            method: 'POST',
            body: JSON.stringify(blog),
            headers: {
                "Content-Type": "application/json",
            }
        })
        const data = await res.json();
       if(data.acknowledged) {
        dispatch(addSingleBlog(
            {
                _id: data.insertedId,
                ...data
            }
        ))
       }
    }
}

export default addBlog;