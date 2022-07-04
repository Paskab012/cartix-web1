/* eslint-disable import/no-anonymous-default-export */
import { FETCH_NGOS_SUCCESS, FETCH_NGOS_FAIL } from '../actions/types';

const initialState = {
    ngos: [],
};

export default function (state = initialState, action) {
    const {type, payload} = action;
    console.log(payload);

    switch (type) {
        case FETCH_NGOS_SUCCESS:
            return {
                ...state,
                ngos: payload
            }
        case FETCH_NGOS_FAIL:
        default:
            return state
    }
}
