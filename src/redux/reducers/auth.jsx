/* eslint-disable import/no-anonymous-default-export */
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    ACTIVATE_SUCCESS,
    ACTIVATE_FAIL,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL,
    PASSWORD_RESET_CONFIRM_FAIL,
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_CONFIRM_SUCCESS,
    PASSWORD_RESET_FAIL,
    LOGOUT,
} from '../actions/types';

const initialState = {
    isAuthenticated: false,
    data: null,
    isSusseffullySignup: false,
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case AUTHENTICATED_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
            };
        case LOGIN_SUCCESS:
            localStorage.setItem('access', payload.access);
            return {
                ...state,
                isAuthenticated: true,
                data: payload,
            };
        case SIGNUP_SUCCESS:
            localStorage.setItem();
            return {
                ...state,
                isAuthenticated: false,
                isSusseffullySignup: true,
            };
        case USER_LOADED_SUCCESS:
            return {
                ...state,
                user: payload,
            };
        case AUTHENTICATED_FAIL:
            return {
                ...state,
                isAuthenticated: false,
            };
        case USER_LOADED_FAIL:
            return {
                ...state,
                user: null,
            };
        case LOGIN_FAIL:
        case SIGNUP_FAIL:
        case LOGOUT:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return {
                ...state,
                access: null,
                refresh: null,
                isAuthenticated: false,
                user: null,
            };
        case PASSWORD_RESET_SUCCESS:
        case PASSWORD_RESET_FAIL:
        case PASSWORD_RESET_CONFIRM_SUCCESS:
        case PASSWORD_RESET_CONFIRM_FAIL:
        case ACTIVATE_SUCCESS:
        case ACTIVATE_FAIL:
            return {
                ...state,
                verifyData: payload,
            };
        default:
            return state;
    }
}
