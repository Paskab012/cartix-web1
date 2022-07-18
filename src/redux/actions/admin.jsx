import React from 'react';
import axios from '../../axios/axiosConfig';
import { toast } from 'react-toastify'; 

import { IS_UPLOAD_DISABLED, IS_UPLOAD_ENABLED, 
        VERIFY_PASSWORD_SUCCESS, VERIFY_PASSWORD_FAIL
} from './types';

export const disableUpload = () => (dispatch) => {
    dispatch({
        type: IS_UPLOAD_DISABLED,
        isUploadDisabled: true,
    });
    toast.success('Upload disabled succefully', {
        position: 'bottom-left',
        autoClose: '2000',
    });
};

export const enableUpload = () => (dispatch) => {
    dispatch({
        type: IS_UPLOAD_ENABLED,
        isUploadDisabled: false,
    });
    toast.success('Upload enabled succefully', {
        position: 'bottom-left',
        autoClose: '2000',
    });
};

export const pswVerification = () => async (dispatch) => {

    try {
        const res = await axios.post(`auth/otp-code/`, body);
        localStorage.token = res.data.token;
        dispatch({
            type: VERIFY_PASSWORD_SUCCESS,
            payload: res.data,
        });
        toast.success('User logged in successfully, an OTP code is sent in your inbox', {
            position: 'bottom-left',
            autoClose: '2000',
        });
        setIsLoading(false);
    } catch (err) {
        dispatch({
            type: VERIFY_PASSWORD_FAIL,
        });
        toast.error('Login fail, invalid credentials, Input the correct ones', {
            position: 'top-right',
            autoClose: '2000',
        });
        setIsLoading(false);
    }
};
