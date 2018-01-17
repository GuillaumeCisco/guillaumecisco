import React from 'react';
import styled, {css} from 'react-emotion';
import {Container, Ul, H3, A, P} from '../common';

import Github from './github';
import LinkedIn from './linkedin';

const Span = styled('span')`
    display: inline-block;
    vertical-align: 16px;
`;

const Core = props =>
    <Container>
        <h1>Hey there!</h1>
        <H3>My name is Guillaume Cisco</H3>
        <P>
            If you are here, there is a high probability you want to know more about me.
            <br />
            <br />
            I created this little interactive website for showing you my skills in the funniest way possible.
            <br />
            When you will close this window, several planets will appear!!!
            <br />
            Each planet will tell you more about my professional experience, hobbies and skills.<br />
            Do not hesitate to click on them!
        </P>
        <p>If you'd like a more conventional version, you can check:</p>
        <Ul>
            <li>
                <A href="https://www.linkedin.com/in/guillaumecisco/" target="_blank">
                    <LinkedIn width={48} height={48} />
                    <Span>linkedIn</Span>
                </A>
            </li>
            <li>
                <A href="https://github.com/GuillaumeCisco" target="_blank">
                    <Github width={48} height={48} />
                    <Span>github</Span>
                </A>
            </li>
        </Ul>

        <P>
            I also give computer science lessons. If you'd like to understand how the matrix works, feel free to contact
            me via linkedin.
            <br />
            I promess you a lot of fun and I will make you one of the most skilled developper in this universe ;)
        </P>
    </Container>;


export default Core;
