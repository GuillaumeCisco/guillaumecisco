import {createAction} from 'redux-actions';

const prefix = 'MODAL';

export const actionTypes = {
    visible: `${prefix}_VISIBLE`,
    component: {
        SET: `${prefix}_COMPONET_SET`,
    },
};

export default {
    visible: createAction(actionTypes.visible),
    component: {
        set: createAction(actionTypes.component.SET)
    },
};
