import { updateSingleBlog } from "../actionCreators/actionCreators";


const updateBlog = (id)  => {
    return async (dispatch, getState) => {
        const res = await fetch('http://localhost:5000/product', {
            method: 'PATCH',
            body: JSON.stringify(id),
            headers: {
                "Content-Type": "application/json",
              }
        })
        const data = await res.json();
       if(data) {
        dispatch(updateSingleBlog(
            {
                _id: data.modifiedCount,
                ...data
            }
        ))
       }
    }
}

export default updateBlog;