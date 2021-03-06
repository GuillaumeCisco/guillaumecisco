import React from 'react';
import styled from '@emotion/styled';

import {
    Container, H3, P, Ul, Li, A,
} from '../common';

const Title = styled('span')`
    font-weight: bold;
    font-size: 24px;
`;

const Date = styled('span')`
    float: right;
`;

const Company = styled('span')`
    font-weight: bold;
`;

const Location = styled('span')`
    margin-left: 10px;
`;

const Cont = styled(Container)`
    max-width: 1000px;
    margin: 0 auto;
`;

const Core = () => (
    <Cont>
        <h1>
            Professional Experience
        </h1>
        <H3>
            I'm passionate about computer science
        </H3>
        <P>
            Currently I'm a Senior Lead FullStack Developer and work mainly in python and javascript in web
            architectures.
            <br />
            Creating websites, softwares or algorithm for both internal and external tools
            on different platforms: desktop, mobile, electronic terminal.
            <br />
            Each development is different but has strong fundamentals like responsiveness, ux friendly, quick and
            comfortable.
        </P>
        <p>
            Here are my main last experiences:
        </p>
        <Ul>
            <Li>
                <Title>
                    FullStack & BlockChain Engineer
                </Title>
                <Date>
                    Mar 2018 – Today
                </Date>
                <br />
                <Company>
                    Owkin
                </Company>
                <Location>
                    Région de Nantes, France
                </Location>
                <ul>
                    <li>
                        Senior Full stack Web Engineer (Back, Front, DevOps).
                    </li>
                    <li>
                        Django REST API
                    </li>
                    <li>
                        React/Redux/Webpack/Node.js websites.
                    </li>
                    <li>
                        SSR/Code splitting/PWA/PRPL Pattern/Electron
                    </li>
                    <li>
                        Blockchain with Hyperledger tools
                    </li>
                    <li>
                        Kubernetes/Docker/Jenkins/Amazon web services.
                    </li>
                    <li>
                        Advanced paradigms and algorithms.
                    </li>
                </ul>
            </Li>
            <Li>
                <Title>
                    Full Stack Lead Senior Engineer – Django/Javascript
                </Title>
                <Date>
                    Mar 2016 – March 2018
                </Date>
                <br />
                <Company>
                    Rythm
                </Company>
                <Location>
                    Paris, France
                </Location>
                <ul>
                    <li>
                        Creation of many internal tools for API backend and frontend projects
                    </li>
                    <li>
                        Authentication, permissions, park management, scalability
                    </li>
                    <li>
                        High level of react driven applications with ssr and jwt authentication
                    </li>
                    <li>
                        Main Technologies: Django, node.js, Git, HTML5, CSS3, React, Redux, Webpack, Django
                        rest framework, Postgresql, Docker, Kubernetes, Blockchain/Hyperledger
                    </li>
                </ul>
            </Li>
            <Li>
                <Title>
                    Full Stack Lead Senior Engineer – Python/Javascript
                </Title>
                <Date>
                    Oct 2014 – Mar 2016
                </Date>
                <br />
                <Company>
                    Tawenda
                </Company>
                <Location>
                    Levallois-Perret, France
                </Location>
                <ul>
                    <li>
                        Creation from scratch of a Social Network free of limitations.
                    </li>
                    <li>
                        Research in informatics Engineering, contribution in many open sources projects.
                    </li>
                    <li>
                        Creation of an nginx Load Balancer with a node.js control API for live streaming.
                    </li>
                    <li>
                        Main Technologies: Django, node.js, Git, HTML5, CSS3, Angular.js, jQuery, Django
                        applications, redis, socket-io.js, postgresql, postgis, Nginx, Action Script 3,
                        WebRTC, ffmpeg, Grunt.
                    </li>
                </ul>
            </Li>
            <Li>
                <Title>
                    Lead Backend Engineer – Django/Python/Javascript
                </Title>
                <Date>
                    Jan 2014 – Oct 2014
                </Date>
                <br />
                <Company>
                    Buzzcar
                </Company>
                <Location>
                    Montreuil, France
                </Location>
                <ul>
                    <li>
                        Team leader of 4 people for maintaining and creating evolutions on main site.
                    </li>
                    <li>
                        Lead Front End decisions and manage system deployment and integrations.
                    </li>
                    <li>
                        Technologies: Django, Git, HTML5, CSS3, Backbone, jQuery, several Django
                        applications
                    </li>
                </ul>
            </Li>
            <Li>
                <Title>
                    Web Front End Engineer – HTML5/CSS3/Javascript
                </Title>
                <Date>
                    Dec 2011 – Dec 2013
                </Date>
                <br />
                <Company>
                    e-TF1
                </Company>
                <Location>
                    Boulogne-Billancourt, France
                </Location>
                <ul>
                    <li>
                        Lead Front-end Developer on major TF1 websites (First French TV Channel).
                    </li>
                    <li>
                        Mainly Responsive Design based website working on web/mobile/tablet + Web App
                    </li>
                    <li>
                        Technologies: HTML5, CSS3, Javascript: Backbone/Marionette, require.js, react,js,
                        Grunt, jQuery - Twig (Django template engine for PHP) – node.js.
                    </li>
                </ul>
            </Li>
            <Li>
                <Title>
                    Consultant - Software Engineer
                </Title>
                <Date>
                    Sep 2011 – Dec 2011
                </Date>
                <br />
                <Company>
                    SII
                </Company>
                <Location>
                    Paris, France
                </Location>
                Video on Demand for SFR. Django/Python, PostgreSQL, HTML 5, CSS3, Javascript
            </Li>
            <Li>
                <Title>
                    Engineering Associate
                </Title>
                <Date>
                    Feb 2011 – Jul 2011
                </Date>
                <br />
                <Company>
                    24/7 Real Media
                </Company>
                <Location>
                    New York, USA
                </Location>
                <ul>
                    <li>
                        Development of a large number of tools for the company (Optimization, Analysis, Web)
                    </li>
                    <li>
                        Mainly Python/Django Framework, HTML 5, CSS3, Javascript (JQuery) and C++.
                    </li>
                </ul>
            </Li>
        </Ul>
        <p>
            You can directly access to all these data by downloading my
            {' '}
            <A
                href="https://drive.google.com/open?id=1OeDkwv4dsVopfftQWAJXnr-Yp0InunFZ"
                target="_blank"
                rel="noopener noreferrer"
            >
                resume
            </A>
        </p>
    </Cont>
);

export default Core;
