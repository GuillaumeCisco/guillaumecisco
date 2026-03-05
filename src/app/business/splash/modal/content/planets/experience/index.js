import React from 'react';
import {css} from '@emotion/react';

import {
  Container, H3, P, Ul, Li, A,
} from '../common';

const titleCss = css`
  font-weight: bold;
  font-size: 24px;
`;

const dateCss = css`
  float: right;
`;

const companyCss = css`
  font-weight: bold;
`;

const locationCss = css`
  margin-left: 10px;
`;

const contCss = css`
  max-width: 1000px;
  margin: 0 auto;
`;

const Experience = () => (
  <div css={contCss}>
    <Container>
      <h1>Professional Experience</h1>

      <H3>I'm passionate about computer science</H3>

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

      <p>Here are my main last experiences:</p>

      <Ul>
        <Li>
          <span css={titleCss}>FullStack & BlockChain Engineer</span>
          <span css={dateCss}>Mar 2018 – Today</span>
          <br />
          <span css={companyCss}>Owkin</span>
          <span css={locationCss}>Région de Nantes, France</span>
          <ul>
            <li>Senior Full stack Web Engineer (Back, Front, DevOps).</li>
            <li>Django REST API</li>
            <li>React/Redux/Webpack/Node.js websites.</li>
            <li>SSR/Code splitting/PWA/PRPL Pattern/Electron</li>
            <li>Blockchain with Hyperledger tools</li>
            <li>Kubernetes/Docker/Jenkins/Amazon web services.</li>
            <li>Advanced paradigms and algorithms.</li>
          </ul>
        </Li>

        <Li>
          <span css={titleCss}>Full Stack Lead Senior Engineer – Django/Javascript</span>
          <span css={dateCss}>Mar 2016 – March 2018</span>
          <br />
          <span css={companyCss}>Rythm</span>
          <span css={locationCss}>Paris, France</span>
          <ul>
            <li>Creation of many internal tools for API backend and frontend projects</li>
            <li>Authentication, permissions, park management, scalability</li>
            <li>High level of react driven applications with ssr and jwt authentication</li>
            <li>
              Main Technologies: Django, node.js, Git, HTML5, CSS3, React, Redux, Webpack, Django
              rest framework, Postgresql, Docker, Kubernetes, Blockchain/Hyperledger
            </li>
          </ul>
        </Li>

        <Li>
          <span css={titleCss}>Full Stack Lead Senior Engineer – Python/Javascript</span>
          <span css={dateCss}>Oct 2014 – Mar 2016</span>
          <br />
          <span css={companyCss}>Tawenda</span>
          <span css={locationCss}>Levallois-Perret, France</span>
          <ul>
            <li>Creation from scratch of a Social Network free of limitations.</li>
            <li>Research in informatics Engineering, contribution in many open sources projects.</li>
            <li>Creation of an nginx Load Balancer with a node.js control API for live streaming.</li>
            <li>
              Main Technologies: Django, node.js, Git, HTML5, CSS3, Angular.js, jQuery, Django
              applications, redis, socket-io.js, postgresql, postgis, Nginx, Action Script 3,
              WebRTC, ffmpeg, Grunt.
            </li>
          </ul>
        </Li>

        <Li>
          <span css={titleCss}>Lead Backend Engineer – Django/Python/Javascript</span>
          <span css={dateCss}>Jan 2014 – Oct 2014</span>
          <br />
          <span css={companyCss}>Buzzcar</span>
          <span css={locationCss}>Montreuil, France</span>
          <ul>
            <li>Team leader of 4 people for maintaining and creating evolutions on main site.</li>
            <li>Lead Front End decisions and manage system deployment and integrations.</li>
            <li>Technologies: Django, Git, HTML5, CSS3, Backbone, jQuery, several Django applications</li>
          </ul>
        </Li>

        <Li>
          <span css={titleCss}>Web Front End Engineer – HTML5/CSS3/Javascript</span>
          <span css={dateCss}>Dec 2011 – Dec 2013</span>
          <br />
          <span css={companyCss}>e-TF1</span>
          <span css={locationCss}>Boulogne-Billancourt, France</span>
          <ul>
            <li>Lead Front-end Developer on major TF1 websites (First French TV Channel).</li>
            <li>Mainly Responsive Design based website working on web/mobile/tablet + Web App</li>
            <li>
              Technologies: HTML5, CSS3, Javascript: Backbone/Marionette, require.js, react,js,
              Grunt, jQuery - Twig (Django template engine for PHP) – node.js.
            </li>
          </ul>
        </Li>

        <Li>
          <span css={titleCss}>Consultant - Software Engineer</span>
          <span css={dateCss}>Sep 2011 – Dec 2011</span>
          <br />
          <span css={companyCss}>SII</span>
          <span css={locationCss}>Paris, France</span>
          Video on Demand for SFR. Django/Python, PostgreSQL, HTML 5, CSS3, Javascript
        </Li>

        <Li>
          <span css={titleCss}>Engineering Associate</span>
          <span css={dateCss}>Feb 2011 – Jul 2011</span>
          <br />
          <span css={companyCss}>24/7 Real Media</span>
          <span css={locationCss}>New York, USA</span>
          <ul>
            <li>Development of a large number of tools for the company (Optimization, Analysis, Web)</li>
            <li>Mainly Python/Django Framework, HTML 5, CSS3, Javascript (JQuery) and C++.</li>
          </ul>
        </Li>
      </Ul>

      <p>
        You can directly access to all these data by downloading my{' '}
        <A
          href="https://drive.google.com/file/d/1OeDkwv4dsVopfftQWAJXnr-Yp0InunFZ"
          target="_blank"
          rel="noopener noreferrer"
        >
          resume
        </A>
      </p>
    </Container>
  </div>
);

export default Experience;
