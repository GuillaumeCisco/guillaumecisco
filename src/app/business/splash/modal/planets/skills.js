import React from 'react';
import styled from 'react-emotion';

import {Container, H3, A} from '../common';

const Cont = styled(Container)`
    text-align: center;
    margin: 0 auto;
`;

const Block = styled('div')`
    text-align: left;
    display: inline-block;
    vertical-align: top;
    margin: 1% 3%;
`;

const Skills = props => (<Cont>
    <h1>
            Skills
    </h1>
    <Block>
        <H3>
                Frontend
        </H3>
        <ul>
            <li>
                    CSS 3
            </li>
            <li>
                    HTML5
            </li>
            <li>
                    Javascript
            </li>
            <li>
                    React
            </li>
            <li>
                    Redux
            </li>
            <li>
                    Webpack
            </li>
            <li>
                    WebRTC
            </li>
            <li>
                    PRPL Pattern
            </li>
            <li>
                    Electron
            </li>
            <li>
                    Http Stream
            </li>
        </ul>
    </Block>
    <Block>
        <H3>
                Backend
        </H3>
        <ul>
            <li>
                    Django (1.3 ~ 2.0)
            </li>
            <li>
                    Django Rest Framework
            </li>
            <li>
                    Node.js
            </li>
            <li>
                    Socket-io.js
            </li>
            <li>
                    Redis
            </li>
        </ul>
    </Block>
    <Block>
        <H3>
                Devops
        </H3>
        <ul>
            <li>
                <ul>
                    <h4>
                            Amazon Web Services
                    </h4>
                    <ul>
                        <li>
                                EC2
                        </li>
                        <li>
                                ECS
                        </li>
                        <li>
                                Route 53
                        </li>
                    </ul>
                </ul>
            </li>
            <li>
                    Kubernetes
            </li>
            <li>
                    Docker
            </li>
            <li>
                    Kong
            </li>
        </ul>
    </Block>
    <Block>
        <H3>
                SQL
        </H3>
        <ul>
            <li>
                    PostGreSQL
            </li>
            <li>
                    ElasticSearch
            </li>
        </ul>
    </Block>
    <Block>
        <H3>
                Blockchain
        </H3>
        <ul>
            <li>
                    Fabric Hyperledger
            </li>
            <li>
                <A href="https://github.com/MorpheoOrg" rel="noopener noreferrer" target="_blank">
                        Morpheo Open Source project
                </A>
            </li>
            <li>
                <A href="https://github.com/SubstraFoundation" rel="noopener noreferrer" target="_blank">
                    Substra Open Source project
                </A>
            </li>
        </ul>
    </Block>
    <Block>
        <H3>
                IDE
        </H3>
        <ul>
            <li>
                    PyCharm
            </li>
            <li>
                    PHPStorm
            </li>
            <li>
                    WebStorm
            </li>
            <li>
                    Intellij IDEA
            </li>
            <li>
                    GoLand
            </li>
        </ul>
    </Block>
    <Block>
        <H3>
                Miscellaneous
        </H3>
        <ul>
            <li>
                    Git
            </li>
            <li>
                    Python
            </li>
            <li>
                    C/C++
            </li>
            <li>
                    ffmpeg
            </li>
            <li>
                    Adobe Photoshop
            </li>
            <li>
                    Shell Scripting: sh, bash, zsh
            </li>
        </ul>
    </Block>
</Cont>
);


export default Skills;
