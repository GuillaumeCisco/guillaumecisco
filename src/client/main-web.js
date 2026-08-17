import {loadableReady} from '@loadable/component';
import {hydrateRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import createCache from '@emotion/cache';
import {CacheProvider} from '@emotion/react';
import {BrowserRouter} from 'react-router';
import {Component} from 'react';


import configureAppStore from '../app/store';
import reportWebVitals from './reportWebVitals';
import App from '../app';

class AppErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError() {
        return {hasError: true};
    }

    componentDidCatch(error) {
        if (typeof window !== 'undefined' && typeof window.__captureException === 'function') {
            window.__captureException(error);
        }
    }

    render() {
        if (this.state.hasError) {
            return <p>UI Error</p>;
        }
        return this.props.children;
    }
}

const store = configureAppStore(window.__PRELOADED_STATE__);

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

const cache = createCache({key: 'css'});

const captureException = (error) => {
    if (typeof window !== 'undefined' && typeof window.__captureException === 'function') {
        window.__captureException(error);
    }
};

const app = (
    <CacheProvider value={cache}>
        <Provider store={store}>
            <AppErrorBoundary>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </AppErrorBoundary>
        </Provider>
    </CacheProvider>
);

if (!window.__APP_HYDRATED__) {
    window.__APP_HYDRATED__ = true;

    const container = document.getElementById('root');

    try {
        if (process.env.NODE_ENV === 'development') {
            hydrateRoot(container, app);
        } else {
            loadableReady(() => {
                hydrateRoot(container, app);
            });
        }
    } catch (err) {
        captureException(err);
    }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

if (
    process.env.NODE_ENV === 'production' &&
    typeof window !== 'undefined' &&
    !window.__SENTRY_LOADED__
) {
    window.__SENTRY_LOADED__ = true;
    window.addEventListener('load', () => {
        window.setTimeout(async () => {
            try {
                await import('./sentry');
                const sentryModule = await import('@sentry/react');
                window.__captureException = sentryModule.captureException;
            } catch {
                window.__captureException = () => {};
            }
        }, 0);
    });
}

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
                    captureException(err);
                    console.error('SW registration failed:', err);
                });
        }
    });
}
