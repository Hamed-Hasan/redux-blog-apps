import { applyMiddleware, createStore } from "redux";
import { blogReducer } from "./reducer/blogReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import rootReducer from "./reducer/rootReducer";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;