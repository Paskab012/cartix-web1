import axios from '../../axios/axiosConfig';
import { toast } from 'react-toastify';

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
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_FAIL,
    PASSWORD_RESET_CONFIRM_SUCCESS,
    PASSWORD_RESET_CONFIRM_FAIL,
    LOGOUT,
} from './types';

export const checkAuthenticated = () => async (dispatch) => {
    if (localStorage.getItem('access')) {
        const body = JSON.stringify({ token: localStorage.getItem('access') });

        try {
            const res = await axios.post(`auth/verify/`, body);

            if (res.data.code !== 'token_not_valid') {
                dispatch({
                    type: AUTHENTICATED_SUCCESS,
                });
            } else {
                dispatch({
                    type: AUTHENTICATED_FAIL,
                });
            }
        } catch (err) {
            dispatch({
                type: AUTHENTICATED_FAIL,
            });
        }
    } else {
        dispatch({
            type: AUTHENTICATED_FAIL,
        });
    }
};

export const load_user = () => async (dispatch) => {
    if (localStorage.getItem('access')) {
        try {
            const res = await axios.get(`auth/users/me/ `);

            dispatch({
                type: USER_LOADED_SUCCESS,
                payload: res.data,
            });
        } catch (err) {
            dispatch({
                type: USER_LOADED_FAIL,
            });
        }
    } else {
        dispatch({
            type: USER_LOADED_FAIL,
        });
    }
};

export const login = (email, password, navigate, setIsLoading) => async (dispatch) => {
    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post(`auth/otp-code/`, body);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        });
        toast.success('User logged in successfully', {
            position: 'bottom-left',
            autoClose: '2000',
        });
        setIsLoading(false);
        // navigate();
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL,
        });
        toast.error('Invalid credentials, Input the correct values', {
            position: 'top-right',
            autoClose: '2000',
        });
        setIsLoading(false);
    }
};

export const signup =
    (ngoName, _, fullName, position, email, password, notify) => async (dispatch) => {
        const body = JSON.stringify({ email: email, password: password, ngo: ngoName, profile: {
                name: fullName,
                job_title: position
            }});

        try {
            const res = await axios.post(`/auth/register/`, body);
            dispatch({
                type: SIGNUP_SUCCESS,
                payload: res.data,
            });
            console.log(res);
            notify();
        } catch (err) {
            dispatch({
                type: SIGNUP_FAIL,
            });
        }
    };

export const loginOtp = (token, otp, navigate, setLoading) => async (dispatch) => {
    const body = JSON.stringify({ email: token, password: otp });

    try {
        await axios.post(`/auth/token/`, body);
        dispatch({
            type: ACTIVATE_SUCCESS,
        });
        setLoading(false);
        // navigate();
    } catch (err) {
        dispatch({
            type: ACTIVATE_FAIL,
        });
        setLoading(false);
    }
};

export const reset_password = (email) => async (dispatch) => {
    const body = JSON.stringify({ email });
    try {
        await axios.post(`auth/reset-password/`, body);
        dispatch({
            type: PASSWORD_RESET_SUCCESS,
        });
    } catch (err) {
        dispatch({
            type: PASSWORD_RESET_FAIL,
        });
    }
};

export const reset_password_confirm =
    (uid, token, new_password, re_new_password) => async (dispatch) => {
        const body = JSON.stringify({ uid, token, new_password, re_new_password });
        try {
            await axios.post(`auth/reset-password-confirm/`, body);
            dispatch({
                type: PASSWORD_RESET_CONFIRM_SUCCESS,
            });
        } catch (err) {
            dispatch({
                type: PASSWORD_RESET_CONFIRM_FAIL,
            });
        }
    };

export const logout = () => (dispatch) => {
    dispatch({
        type: LOGOUT,
    });
};
