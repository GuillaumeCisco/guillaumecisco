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
        <h1>Nice catch!</h1>
        <p>For rewarding you, you can now access to an old and mystic knowledge only reserved to the braves!</p>
        <br/>
        <p>
            <a href="https://github.com/GuillaumeCisco/guillaumecisco">Here</a> you can find the code for making this website!
        </p>
    </Container>;


export default Awards;
