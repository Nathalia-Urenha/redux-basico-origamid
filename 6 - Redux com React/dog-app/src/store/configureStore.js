import { combineReducers, configureStore } from '@reduxjs/toolkit';
import login from './login';


const reducer = combineReducers({login})
const store = configureStore({ reducer });

export default store;