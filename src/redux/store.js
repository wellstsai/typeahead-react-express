import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import booksReducer from "./booksReducer";

export default createStore(booksReducer, applyMiddleware(thunk));