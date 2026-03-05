<<<<<<< HEAD
import React from 'react';
import {css} from '@emotion/react';

import {Container, H3, A} from '../common';

const contCss = css`
  text-align: center;
  margin: 0 auto;
`;

const blockCss = css`
  text-align: left;
  display: inline-block;
  vertical-align: top;
  margin: 1% 3%;
`;

const Skills = () => (
  <div css={contCss}>
    <Container>
      <h1>Skills</h1>

      <div css={blockCss}>
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
          <li>Http Stream</li>
        </ul>
      </div>

      <div css={blockCss}>
        <H3>Backend</H3>
        <ul>
          <li>Django (1.3 ~ 2.0)</li>
          <li>Django Rest Framework</li>
          <li>Node.js</li>
          <li>Socket-io.js</li>
          <li>Redis</li>
        </ul>
      </div>

      <div css={blockCss}>
        <H3>Devops</H3>
        <ul>
          <li>
            <ul>
              <h4>Amazon Web Services</h4>
              <ul>
                <li>EC2</li>
                <li>ECS</li>
                <li>Route 53</li>
              </ul>
            </ul>
          </li>
          <li>Kubernetes</li>
          <li>Docker</li>
          <li>Kong</li>
        </ul>
      </div>

      <div css={blockCss}>
        <H3>SQL</H3>
        <ul>
          <li>PostGreSQL</li>
          <li>ElasticSearch</li>
        </ul>
      </div>

      <div css={blockCss}>
        <H3>Blockchain</H3>
        <ul>
          <li>Fabric Hyperledger</li>
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
      </div>

      <div css={blockCss}>
        <H3>IDE</H3>
        <ul>
          <li>PyCharm</li>
          <li>PHPStorm</li>
          <li>WebStorm</li>
          <li>Intellij IDEA</li>
          <li>GoLand</li>
        </ul>
      </div>

      <div css={blockCss}>
        <H3>Miscellaneous</H3>
        <ul>
          <li>Git</li>
          <li>Python</li>
          <li>C/C++</li>
          <li>ffmpeg</li>
          <li>Adobe Photoshop</li>
          <li>Shell Scripting: sh, bash, zsh</li>
        </ul>
      </div>
    </Container>
  </div>
=======
import styleParent from '../../../style';
import style from './style'

const Skills = () => (
    <div css={style.container}>
        <div css={styleParent.container}>
            <h1>Skills</h1>

            <div css={style.block}>
                <h3 css={styleParent.h3}>Frontend</h3>
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
                    <li>Http Stream</li>
                </ul>
            </div>

            <div css={style.block}>
                <h3 css={styleParent.h3}>Backend</h3>
                <ul>
                    <li>Django (1.3 ~ 5.0)</li>
                    <li>Django Rest Framework</li>
                    <li>Node.js</li>
                    <li>Socket-io.js</li>
                    <li>Redis</li>
                </ul>
            </div>

            <div css={style.block}>
                <h3 css={styleParent.h3}>Devops</h3>
                <ul>
                    <li>Amazon Web Services</li>
                    <ul>
                        <li>EC2</li>
                        <li>ECS</li>
                        <li>Route 53</li>
                    </ul>
                    <li>Kubernetes</li>
                    <li>Docker</li>
                    <li>Kong</li>
                </ul>
            </div>

            <div css={style.block}>
                <h3 css={styleParent.h3}>SQL</h3>
                <ul>
                    <li>PostGreSQL</li>
                    <li>ElasticSearch</li>
                </ul>
            </div>

            <div css={style.block}>
                <h3 css={styleParent.h3}>Blockchain</h3>
                <ul>
                    <li>Fabric Hyperledger</li>
                    <li>
                        <a css={styleParent.a} href="https://github.com/MorpheoOrg" rel="noopener noreferrer"
                           target="_blank">
                            Morpheo Open Source project
                        </a>
                    </li>
                    <li>
                        <a css={styleParent.a} href="https://github.com/SubstraFoundation" rel="noopener noreferrer"
                           target="_blank">
                            Substra Open Source project
                        </a>
                    </li>
                </ul>
            </div>

            <div css={style.block}>
                <h3 css={styleParent.h3}>IDE</h3>
                <ul>
                    <li>PyCharm</li>
                    <li>PHPStorm</li>
                    <li>WebStorm</li>
                    <li>Intellij IDEA</li>
                    <li>GoLand</li>
                </ul>
            </div>

            <div css={style.block}>
                <h3 css={styleParent.h3}>Miscellaneous</h3>
                <ul>
                    <li>Git</li>
                    <li>Python</li>
                    <li>C/C++</li>
                    <li>ffmpeg</li>
                    <li>Adobe Photoshop</li>
                    <li>Shell Scripting: sh, bash, zsh</li>
                </ul>
            </div>
        </div>
    </div>
>>>>>>> be17549 (update code to last dependencies and last usage)
);

export default Skills;
