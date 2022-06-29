import { combineReducers } from 'redux';
import auth from './auth';
import ngos from "./ngos";

export default combineReducers({
    auth,
    ngos,
});
