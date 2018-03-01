import {actionTypes} from './actions';

const initialState = {
    visible: false,
    component: null,
};

const modal = (state = initialState, {type, payload}) => {
    switch (type) {
    case actionTypes.visible:
        return {
            ...state,
            visible: payload,
            component: payload ? state.component : null,
        };
    case actionTypes.component.SET:
        return {
            ...state,
            visible: true,
            component: payload,
        };
    default:
        return state;
    }
};

export default modal;
