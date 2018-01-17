import React from 'react';
import styled from 'react-emotion';

import {Container, H3} from '../common';

const Cont = styled(Container)`
    text-align: center;
    margin: 0 auto;
    display: inline-block;
`;

const Block = styled('div')`
    text-align: left;
    display: inline-block;
    vertical-align: top;
    margin: 1% 5%;
`;

const Skills = props =>
    <Cont>
        <h1>Skills</h1>
        <Block>
            <H3>Frontend</H3>
            <ul>
                <li>CSS 3</li>
                <li>HTML5</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Redux</li>
                <li>Webpack</li>
                <li>WebRTC</li>
                <li>PRPL Pattern</li>
                <li>Electron</li>
            </ul>
        </Block>
        <Block>
            <H3>Backend</H3>
            <ul>
                <li>Node.js</li>
                <li>Socket-io.js</li>
                <li>Django (1.3 ~ 1.11)</li>
                <li>Redis</li>
            </ul>
        </Block>
        <Block>
            <H3>Devops</H3>
            <ul>
                <li>Amazon Web Services</li>
                <li>Kubernetes</li>
                <li>Docker</li>
                <li>Kong</li>
            </ul>
        </Block>
        <Block>
            <h3>Blockchain</h3>
            <ul>
                <li>Fabric Hyperledger</li>
            </ul>
        </Block>
        <Block>
            <H3>IDE</H3>
            <ul>
                <li>PyCharm</li>
                <li>PHPStorm</li>
                <li>WebStorm</li>
                <li>Intellij IDEA</li>
                <li>Gogland</li>
            </ul>
        </Block>
        <Block>
            <H3>Miscellaneous</H3>
            <ul>
                <li>Git</li>
                <li>Python</li>
                <li>PostGreSQL</li>
                <li>C/C++</li>
                <li>Adobe Photoshop</li>
                <li>Shell Scripting: sh, bash, zsh</li>
            </ul>
        </Block>
    </Cont>;


export default Skills;
