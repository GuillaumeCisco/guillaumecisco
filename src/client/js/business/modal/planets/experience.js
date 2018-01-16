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
        <h1>Professional Experience</h1>
        <H3>I'm passionate about computer science</H3>
        <P>
            Currently I'm a Senior Lead FullStack Developer and work mainly in python and javascript in web architecures.
            <br/>
            Creating websites, softwares or algorithm for both internal and external tools ;
            on different platforms: desktop, mobile, electronic terminal.
            <br/>
            Each development is different but has strong fundamentals like responsiveness, ux friendly, quick and confortable.
        </P>
        <p>Here are my main last experiences</p>
        <Ul>
            <li>
                Rythm
            </li>
            <li>
                Tawenda
            </li>
            <li>
                Buzzcar
            </li>
            <li>
                TF1
            </li>
            <li>
                SFR
            </li>
            <li>
                24/7 Real Media
            </li>
        </Ul>
        <p>You can directly access to all these informations by downloading my <A href="" target="_blank">resume</A></p>
    </Container>;


export default Core;
