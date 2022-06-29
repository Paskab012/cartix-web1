import axios from '../../axios/axiosConfig';

import {FETCH_NGOS_FAIL, FETCH_NGOS_SUCCESS} from './types';

export const fetch_ngos = () => async (dispatch) => {
    try {
        const res = await axios.get(`analytics/ngos/`);

        dispatch({
            type: FETCH_NGOS_SUCCESS,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: FETCH_NGOS_FAIL,
        });
    }
};
