import {loadableReady} from '@loadable/component';
import {hydrateRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import createCache from '@emotion/cache';
import {CacheProvider} from '@emotion/react';
import {BrowserRouter} from 'react-router';


import configureAppStore from '../app/store';
import reportWebVitals from './reportWebVitals';
import App from '../app';

const store = configureAppStore(window.__PRELOADED_STATE__);

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

import './../app/common/ui/fonts.css';

const cache = createCache({key: 'css'});

if (!window.__APP_HYDRATED__) {
    window.__APP_HYDRATED__ = true;

    loadableReady(() => (
        hydrateRoot(document.getElementById('root'),
            <CacheProvider value={cache}>
                <Provider store={store}>
                    <BrowserRouter>
                        <App/>
                    </BrowserRouter>
                </Provider>
            </CacheProvider>
        )
    ));
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

if (
    process.env.NODE_ENV === 'production' &&
    'serviceWorker' in navigator &&
    !window.__SW_REGISTERED__
) {
    window.__SW_REGISTERED__ = true;

    window.addEventListener('load', async () => {
        const registration = await navigator.serviceWorker.getRegistration();

        if (!registration) {
            navigator.serviceWorker.register('/service-worker.js')
                .then((reg) => {
                    console.log('SW registered:', reg.scope);
                })
                .catch((err) => {
                    console.error('SW registration failed:', err);
                });
        }
    });
}
