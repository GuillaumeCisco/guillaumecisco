import styled from 'react-emotion';

const color = '#ddd';

export const Container = styled('div')`
    color: ${color};
`;

export const H3 = styled('h3')`
    margin: 10px;
`;

export const P = styled('p')`
    text-align: left;
    margin: 20px auto;
    display: inline-block;
`;

export const Ul = styled('ul')`
    list-style: none;
    padding: 0 200px;
    margin: 80px 0;
`;

export const Li = styled('li')`
    margin: 30px 0;
    text-align: left;
    font-size: 20px;
`;

export const A = styled('a')`
    text-decoration: none;
    color: ${color};
`;
