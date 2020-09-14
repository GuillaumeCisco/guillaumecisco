/* globals PRODUCTION_BASE_NAME */
import {NOT_FOUND} from 'redux-first-router';

import configureStore from '../common/configureStore';

const doesRedirect = ({kind, pathname, search}, res) => {
    if (kind === 'redirect') {
        res.redirect(302, search ? `${pathname}?${search}` : pathname);
        return true;
    }
};

export default async (ctx) => {
    const {store, thunk} = configureStore({}, [ctx.originalUrl], {
        basename: PRODUCTION_BASE_NAME,
    });

    // if not using onBeforeChange + jwTokens, you can also async authenticate
    // here against your db (i.e. using req.cookies.sessionId)

    // the idiomatic way to handle redirects
    // serverRender.js will short-circuit since the redirect is made here already
    const location = store.getState().location;

    if (doesRedirect(location, ctx.res)) return false;

    // using redux-thunk perhaps request and dispatch some app-wide state as well, e.g:
    // await Promise.all([store.dispatch(myThunkA), store.dispatch(myThunkB)])

    await thunk(store); // THE PAYOFF BABY!

    // the idiomatic way to handle routes not found :)
    // your component's should also detect this state and render a 404 scene
    ctx.status = location.type === NOT_FOUND && (!location.query || (location.query && !location.query['_sw-precache'])) ? 404 : 200;

    return store;
};
