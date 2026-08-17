import PropTypes from 'prop-types';

const Icon = ({children}) => (
    <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
    >
        {children}
    </svg>
);
Icon.propTypes = {
    children: PropTypes.node.isRequired,
};

export const AgentsIcon = () => (
    <Icon>
        <path d="M10 9.5h12a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4Z" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M16 9.5V6m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM11 17h.01M21 17h.01M11 23.5V27m10-3.5V27M6 15H3m23 0h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </Icon>
);

export const SystemsIcon = () => (
    <Icon>
        <path d="m16 3 12 6-12 6L4 9l12-6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="m6.5 14 9.5 4.75L25.5 14M6.5 20l9.5 4.75L25.5 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
);

export const ProductIcon = () => (
    <Icon>
        <path d="m16 3 11 6.25v13.5L16 29 5 22.75V9.25L16 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="m5 9.25 11 6.25 11-6.25M16 15.5V29M10.5 6.1l11 6.25" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    </Icon>
);
