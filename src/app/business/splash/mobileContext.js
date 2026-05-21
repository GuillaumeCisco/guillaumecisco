import {
    createContext, useContext, useEffect, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';

const MOBILE_QUERY = '(max-width: 767px)';
const MobileContext = createContext(false);

const getIsMobile = () => (
    typeof window !== 'undefined'
    && window.matchMedia(MOBILE_QUERY).matches
);

export const MobileProvider = ({children}) => {
    const [isMobile, setIsMobile] = useState(getIsMobile);

    useEffect(() => {
        if (typeof window === 'undefined') return undefined;

        const media = window.matchMedia(MOBILE_QUERY);
        const onChange = (e) => setIsMobile(e.matches);
        const onResize = () => setIsMobile(media.matches);

        setIsMobile(media.matches);
        media.addEventListener('change', onChange);
        window.addEventListener('resize', onResize);
        window.addEventListener('orientationchange', onResize);

        return () => {
            media.removeEventListener('change', onChange);
            window.removeEventListener('resize', onResize);
            window.removeEventListener('orientationchange', onResize);
        };
    }, []);

    const value = useMemo(() => isMobile, [isMobile]);

    return (
        <MobileContext.Provider value={value}>
            {children}
        </MobileContext.Provider>
    );
};

MobileProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useIsMobile = () => useContext(MobileContext);

