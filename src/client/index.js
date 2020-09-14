/* global document */

import React from 'react';
import {hydrate, render} from 'react-dom';
import FastClick from 'fastclick';

import App from './App';

// load DevTools
import './DevTools';

FastClick.attach(document.body);

const root = document.getElementById('root');

// render for electron, hydrate for SSR
if (process.env.IS_ELECTRON !== 'false') {
    render(<App />, root);
}
else {
    hydrate(<App />, root);
}
