import React from 'react';
import styled from 'react-emotion';

const color = '#333';

const Container = styled('div')`
    color: ${color};
`;

const H3 = styled('h3')`
    margin: 10px;
`;

const P = styled('p')`
    text-align: justify;
    margin: 20px auto;
    display: inline-block;
`;

const Ul = styled('ul')`
    list-style: none;
`;

const A = styled('a')`
    text-decoration: none;
    color: ${color};
`;

const Awards = props =>
    <Container>
        <h1>Awards</h1>
    </Container>;


export default Awards;
