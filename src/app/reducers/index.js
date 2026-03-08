import generalSlice from './general';
import uiSlice from './ui';
import modalSlice from '../business/splash/modal/reducer';

export default {
    general: generalSlice.reducer,
    modal: modalSlice.reducer,
    ui: uiSlice.reducer,
};
