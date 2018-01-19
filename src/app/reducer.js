import {actionTypes} from './actions';
import modal from './business/modal/reducer';

const initialState = {
    error: '',
    intro: false,
};

export const general = (state = initialState, {type, payload}) => {
    switch (type) {
    case actionTypes.error.SET:
        return {
            ...state,
            error: payload,
        };
    case actionTypes.intro.SET:
        return {
            ...state,
            intro: payload,
        };
    default:
        return state;
    }
};

export default {
    general,
    modal,
};
