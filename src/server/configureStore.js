import createHistory from 'history/createMemoryHistory';
import {NOT_FOUND} from 'redux-first-router';

import configureStore from '../common/configureStore/index';

const doesRedirect = ({kind, pathname}, res) => {
    if (kind === 'redirect') {
        res.redirect(302, pathname);
        return true;
    }
};

export default async (req, res) => {
    const history = createHistory({initialEntries: [req.path]});
    const {store, thunk} = configureStore(history, {});

    // if not using onBeforeChange + jwTokens, you can also async authenticate
    // here against your db (i.e. using req.cookies.sessionId)

    const {location} = store.getState();
    if (doesRedirect(location, res)) return false;

    // using redux-thunk perhaps request and dispatch some app-wide state as well, e.g:
    // await Promise.all([store.dispatch(myThunkA), store.dispatch(myThunkB)])

    await thunk(store); // THE PAYOFF BABY!

    const {loc} = store.getState(); // remember: state has now changed
    if (doesRedirect(loc, res)) return false; // only do this again if ur thunks have redirects

    const status = loc.type === NOT_FOUND ? 404 : 200;
    res.status(status);
    return store;
};
