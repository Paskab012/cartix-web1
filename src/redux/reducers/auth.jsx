/* eslint-disable import/no-anonymous-default-export */
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL,
    OBTAIN_OTP_CODE_SUCCESS,
    OBTAIN_OTP_CODE_FAIL,
    PASSWORD_RESET_CONFIRM_FAIL,
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_CONFIRM_SUCCESS,
    PASSWORD_RESET_FAIL,
    LOGOUT,
} from '../actions/types';

const initialState = {
    isAuthenticated: false,
    accessToken: null,
    refreshToken: null,
    verifyToken: null,
    user: null,
    isSusseffullySignup: false,
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case AUTHENTICATED_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                isSusseffullySignup: false,
            };
        case OBTAIN_OTP_CODE_SUCCESS:
            return {
                ...state,
                verifyToken: payload.token,
                isSusseffullySignup: false,
            }
        case OBTAIN_OTP_CODE_FAIL:
            return {
                ...state,
                verifyToken: null,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: payload.user,
                accessToken: payload.access,
                refreshToken: payload.verify,
                isSusseffullySignup: false,
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                isSusseffullySignup: true,
            };
        case USER_LOADED_SUCCESS:
            return {
                ...state,
                user: payload,
                isSusseffullySignup: false,
            };
        case AUTHENTICATED_FAIL:
            return {
                ...state,
                isAuthenticated: false,
                isSusseffullySignup: false,
            };
        case USER_LOADED_FAIL:
            return {
                ...state,
                accessToken: null,
                refreshToken: null,
                user: null,
            };
        case LOGIN_FAIL:
        case SIGNUP_FAIL:
        case LOGOUT:
            return {
                ...state,
                accessToken: null,
                refreshToken: null,
                isAuthenticated: false,
                user: null,
            };
        case PASSWORD_RESET_SUCCESS:
        case PASSWORD_RESET_FAIL:
        case PASSWORD_RESET_CONFIRM_SUCCESS:
        case PASSWORD_RESET_CONFIRM_FAIL:
        default:
            return state;
    }
}
