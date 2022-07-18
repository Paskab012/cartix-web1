import axios from '../../axios/axiosConfig';
import { toast } from 'react-toastify';

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
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_FAIL,
    PASSWORD_RESET_CONFIRM_SUCCESS,
    PASSWORD_RESET_CONFIRM_FAIL,
    LOGOUT,

} from './types';

export const checkAuthenticated = () => async (dispatch, getState) => {
    const body = JSON.stringify({ token: getState().auth.accessToken });

    try {
        await axios.post(`auth/verify/`, body);

        dispatch({
            type: AUTHENTICATED_SUCCESS,
        });
    } catch (err) {
        dispatch({
            type: AUTHENTICATED_FAIL,
        });
    }
};

export const load_user = () => async (dispatch, getState) => {
    const headers = {
        "Authorization": `Bearer ${getState().auth.accessToken}`
    }

    try {
        const res = await axios.get(`users/me/ `, headers);

        dispatch({
            type: USER_LOADED_SUCCESS,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: USER_LOADED_FAIL,
        });
    }
};

export const login = (email, password, setIsLoading, redirectTo) => async (dispatch) => {
    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post(`auth/otp-code/`, body);
        dispatch({
            type: OBTAIN_OTP_CODE_SUCCESS,
            payload: res.data,
        });
        toast.success('User logged in successfully, an OTP code is sent in your inbox', {
            position: 'bottom-left',
            autoClose: '2000',
        });
        setIsLoading(false);
        redirectTo("/activate");
    } catch (err) {
        dispatch({
            type: OBTAIN_OTP_CODE_FAIL,
        });
        toast.error('Login fail, invalid credentials, Input the correct ones', {
            position: 'top-right',
            autoClose: '2000',
        });
        setIsLoading(false);
    }
};

export const signup =
    (ngoName, _, fullName, position, email, password, setLoading, redirectTo) =>
    async (dispatch) => {
        const body = JSON.stringify({
            email: email,
            password: password,
            ngo: ngoName,
            profile: {
                name: fullName,
                job_title: position,
            },
        });

        try {
            const res = await axios.post(`auth/register/`, body);
            dispatch({
                type: SIGNUP_SUCCESS,
                payload: res.data,
            });
            setLoading(false);
            redirectTo('/login');
        } catch (err) {
            dispatch({
                type: SIGNUP_FAIL,
            });
            setLoading(false);
        }
    };

export const loginOtp =
    (email, password, setLoading, navigateTo) =>
    async (dispatch) => {
        const body = JSON.stringify({ email, password });
        try {
            const res = await axios.post(`auth/token/`, body);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data,
            });
            setLoading(false);
            navigateTo("/savings-group-map");
        } catch (err) {
            dispatch({
                type: LOGIN_FAIL,
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
