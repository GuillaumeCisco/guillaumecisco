/* eslint-disable import/no-import-module-exports */
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import {injectSlice} from 'redux-lazy-hmr';
import rootReducer from './reducers';

const SagaMiddleware = createSagaMiddleware();

const configureAppStore = (preloadedState) => {
    const store = configureStore({
        reducer: combineReducers(rootReducer),
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: true}).prepend(SagaMiddleware),
        preloadedState,
    });

    // reducer lazy load handling
    store.injectSlice = injectSlice(store, rootReducer);
    // reducer HMR handling
    if (process.env.NODE_ENV !== 'production' && module.hot) {
        try {
            const enableLazySliceHMR = require('@hmr-cache-lazy').default;
            enableLazySliceHMR(store);
            console.log('Loaded HMR cache!');
        }
 catch (e) {
            console.error('Could not load @hmr-cache-lazy:', e);
        }
    }

    // SagaMiddleware.run(rootSaga);
    return store;
};

export default configureAppStore;
