import {ThemeProvider} from '@emotion/react';
import {Route, Routes} from 'react-router';
import themes from './common/ui/themes';

import Splash from './business/splash';
import style from './style'
import ServiceWorker from './business/common/components/serviceWorker';
import Layout from "./layout";
import {useEffect} from "react";
import {get} from "./reducers/ui";
import {useDispatch, useSelector} from "react-redux";

const App = () => {
    const dispatch = useDispatch();
    const themeName = useSelector((state) => state.ui.theme?.theme || 'default');
    const theme = themes[themeName] || themes.default;

    useEffect(() => {
        dispatch(get());
    }, []);

    return (
        <div css={style.container}>
            <ThemeProvider theme={theme}>
                <ServiceWorker/>
                <Routes>
                    <Route element={<Layout/>}>
                        <Route path="/" element={<Splash/>}/>
                    </Route>
                </Routes>
            </ThemeProvider>
        </div>
    );
};

export default App;
