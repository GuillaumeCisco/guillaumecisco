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

const Core = props =>
    <Container>
        <h1>Hey there!</h1>
        <H3>My name is Guillaume Cisco</H3>
        <P>
            If you are here, there is a high probability you want to know more about me.
            <br/>
            <br/>
            I created this little interactive website for showing you my skills in the funniest way possible.
            <br/>
            When you will close this window, several planets will appear!!!
            <br/>
            Each planet will tell you more about my professional experience, my hobbies and my awards if you click on it.
        </P>
        <p>If you'd like a more conventional version, you can check:</p>
        <Ul>
            <li>
                <A href="https://www.linkedin.com/in/guillaumecisco/" target="_blank">linkedin</A>
            </li>
            <li>
                <A href="https://github.com/GuillaumeCisco" target="_blank">github</A>
            </li>
        </Ul>
    </Container>;


export default Core;
