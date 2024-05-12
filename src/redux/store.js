// import {configureStore} from "@reduxjs/toolkit";

import {createStore} from "redux";

import rootReducers from "./reducer/index";
import { composeWithDevTools } from "redux-devtools-extension";


// const store=configureStore({
//     reducer:rootReducers,
// });

const store=createStore(rootReducers,composeWithDevTools())
export default store;