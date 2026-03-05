import {useTheme, Global} from '@emotion/react';
import {Route, Routes} from 'react-router';

import Splash from './business/splash';
import style from './style'
import ServiceWorker from './business/common/components/serviceWorker';
import globalStyles from "./common/ui/globalStyles";
import Layout from "./layout";

const App = () => {
    const theme = useTheme();
    return <dic css={style.container}>
        <Global styles={globalStyles(theme)}/>
        <ServiceWorker/>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Splash/>}/>
            </Route>
        </Routes>
    </dic>
};
export default App;
