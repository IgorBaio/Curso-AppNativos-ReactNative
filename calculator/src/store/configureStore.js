import { createStore, combineReducers } from "redux";

import saveReducer from '../reducer/saveReducer'

const rootReducer = combineReducers({
    save: saveReducer
})

const configureSaveReducer = () => createStore(rootReducer, window.__REDUX__DEVTOOLS_EXTENSION__ && window.__REDUX__DEVTOOLS_EXTENSION__());

export {configureSaveReducer}