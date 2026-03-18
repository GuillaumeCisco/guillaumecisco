import './sentry';
import { ErrorBoundary, captureException } from '@sentry/react';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router';

import configureAppStore from '../app/store';
import reportWebVitals from './reportWebVitals';
import App from '../app';

import './../app/common/ui/fonts.css';

const store = configureAppStore({});
const cache = createCache({ key: 'css' });

const container = document.getElementById('root');

try {
    createRoot(container).render(
        <CacheProvider value={cache}>
            <Provider store={store}>
                <ErrorBoundary fallback={<p>Erreur UI</p>}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </ErrorBoundary>
            </Provider>
        </CacheProvider>
    );
} catch (err) {
    captureException(err);
}

reportWebVitals();
