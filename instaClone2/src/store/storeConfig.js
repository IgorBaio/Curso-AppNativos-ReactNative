import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import userReducer from "./reducers/userReducer";
import postsReducer from "./reducers/posts";
import thunk from 'redux-thunk'

const reducers = combineReducers({
    user: userReducer,
    posts: postsReducer
})

const storeConfig = () =>
    createStore(reducers, compose(applyMiddleware(thunk)))

export default storeConfig