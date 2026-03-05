import {loadableReady} from '@loadable/component';
import {hydrateRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router';


import configureAppStore from '../app/store';
import reportWebVitals from './reportWebVitals';
import App from '../app';

const store = configureAppStore(window.__PRELOADED_STATE__);

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

// TODO use global styles
loadableReady(() => {
    hydrateRoot(document.getElementById('root'),
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
