// careful react-universal-component can introduce a bug with react-hot-loader

export default {
    vendor: ['fetch-everywhere'],
    react: ['react', 'react-dom', 'react-tap-event-plugin', 'react-redux'],
    redux: ['redux', 'redux-actions', 'redux-first-router', 'redux-reducers-injector', 'redux-saga', 'redux-sagas-injector'],
    emotion: ['react-emotion', 'emotion', 'create-emotion', 'create-emotion-styled'],
    common: ['fastclick', 'history', 'lodash-es', 'react-helmet', 'recompose', 'react-typist'],
    d3: ['d3', 'd3-interpolate', 'd3-selection', 'd3-transition', 'd3-color', 'd3-timer', 'd3-ease', 'd3-dispatch'],
};
