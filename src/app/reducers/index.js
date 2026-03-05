<<<<<<< HEAD
import {actionTypes} from './actions';
import modal from './business/splash/modal/reducer';

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
=======
import generalSlice from './general';
import uiSlice from './ui';
import modalSlice from '../business/splash/modal/reducer';

export default {
    general: generalSlice.reducer,
    modal: modalSlice.reducer,
    ui: uiSlice.reducer,
>>>>>>> be17549 (update code to last dependencies and last usage)
};
