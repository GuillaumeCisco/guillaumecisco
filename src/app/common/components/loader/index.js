import {SyncLoader} from 'react-spinners';
import {useTheme} from '@emotion/react';

function Loader({className}) {
    const theme = useTheme();
    return <SyncLoader className={className} size={8} speedMultiplier={0.7} color={theme?.colors?.spinner || '#000'} />;
}

export default Loader;
