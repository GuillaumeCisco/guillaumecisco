import {useTheme, Global} from '@emotion/react';
import {Outlet} from 'react-router';

import globalStyles from '../common/ui/globalStyles';


function Layout() {
    const theme = useTheme();
    return <>
        <Global styles={globalStyles(theme)} />
        <Outlet />
    </>
}

export default Layout;
