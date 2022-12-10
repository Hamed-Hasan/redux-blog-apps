import { loadBlog } from "../actionCreators/actionCreators";

const fetchBlogsData = () => {
    return async (dispatch, getState) => {
        const res = await fetch("https://redux-blog-application.onrender.com/product");
        const data = await res.json();
        
        if(data.data.length){
            dispatch(loadBlog(data.data))
        }
    }
}
export default fetchBlogsData;