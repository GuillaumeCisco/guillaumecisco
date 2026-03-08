import styleParent from '../../../style';
import style from './style';


const Experience = () => (
    <div css={style.container}>
        <div>
            <h1>Professional Experience</h1>

            <h3 css={styleParent.h3}>I'm passionate about computer science</h3>

            <p css={styleParent.p}>
                Currently I'm a Senior Lead FullStack Engineer and work mainly in python and javascript in web
                architectures.
                <br/>
                Creating websites, software or algorithm for both internal and external tools
                on different platforms: desktop, mobile, electronic terminal.
                <br/>
                Each development is different but has strong fundamentals like responsiveness, ux friendly, quick and
                comfortable.
            </p>

            <p css={styleParent.p}>Here are my main last experiences:</p>

            <ul css={styleParent.ul}>
                <li css={styleParent.li}>
                    <span css={style.title}>Lead FullStack Senior Engineer</span>
                    <span css={style.date}>Sept 2021 – Today</span>
                    <br/>
                    <span css={style.company}>Yubo</span>
                    <span css={style.location}>Paris, France</span>
                    <ul css={style.ul}>
                        <li css={style.li}>Lead of technical aspects for our global tools suite about moderation on the Yubo
                            platform. Live problematics handling and data science integration.
                            Development of new features, bugs correction, product exchange. Team management. </li>
                        <li css={style.li}>React/Node.js/Redux</li>
                        <li css={style.li}>Kubernetes/Gcloud/Docker</li>
                        <li css={style.li}>Multiple Database support: postgresql, mongodb, elasticsearch, redis, biquery, bigtable
                            couchbase.
                        </li>
                        <li css={style.li}>CI/CD ArgoCD</li>
                        <li css={style.li}>Advanced paradigms and algorithms.</li>
                    </ul>
                </li>


                <li css={styleParent.li}>
                    <span css={style.title}>FullStack Lead Senior Engineer</span>
                    <span css={style.date}> June 2020 – Sept 2021</span>
                    <br/>
                    <span css={style.company}>Forest Admin</span>
                    <span css={style.location}>Paris, France</span>
                    <ul css={style.ul}>
                        <li css={style.li}>Features and product implementation. Client satisfaction as a priority. Hard focus on functional and technical specification. Deep debugging and code migration. </li>
                        <li css={style.li}>Ember/Node.js/Python/Ruby</li>
                        <li css={style.li}>Heroku/Docker</li>
                        <li css={style.li}>Multiple Database support: postgresql, mysql, mssql, mongo…</li>
                        <li css={style.li}>CI/CD Travis and TDD</li>
                        <li css={style.li}>Advanced paradigms and algorithms</li>
                    </ul>
                </li>
                <li css={styleParent.li}>
                    <span css={style.title}>FullStack & BlockChain Engineer</span>
                    <span css={style.date}>Mar 2018 – May 2020</span>
                    <br/>
                    <span css={style.company}>Owkin</span>
                    <span css={style.location}>Région de Nantes, France</span>
                    <ul css={style.ul}>
                        <li css={style.li}>Senior Full stack Web Engineer (Back, Front, DevOps).</li>
                        <li css={style.li}>Django REST API</li>
                        <li css={style.li}>React/Redux/Webpack/Node.js websites.</li>
                        <li css={style.li}>SSR/Code splitting/PWA/PRPL Pattern/Electron</li>
                        <li css={style.li}>Blockchain with Hyperledger tools</li>
                        <li css={style.li}>Kubernetes/Docker/Jenkins/Amazon web services.</li>
                        <li css={style.li}>Advanced paradigms and algorithms.</li>
                    </ul>
                </li>

                <li css={styleParent.li}>
                    <span css={style.title}>Full Stack Lead Senior Engineer – Django/Javascript</span>
                    <span css={style.date}>Mar 2016 – March 2018</span>
                    <br/>
                    <span css={style.company}>Dreem</span>
                    <span css={style.location}>Paris, France</span>
                    <ul css={style.ul}>
                        <li css={style.li}>Creation of many internal tools for API backend and frontend projects
                        </li>
                        <li css={style.li}>Authentication, permissions, park management, scalability</li>
                        <li css={style.li}>High level of react driven applications with ssr and jwt
                            authentication
                        </li>
                        <li css={style.li}>
                            Main Technologies: Django, node.js, Git, HTML5, CSS3, React, Redux, Webpack, Django
                            rest framework, Postgresql, Docker, Kubernetes, Blockchain/Hyperledger
                        </li>
                    </ul>
                </li>

                <li css={styleParent.li}>
                    <span css={style.title}>Full Stack Lead Senior Engineer – Python/Javascript</span>
                    <span css={style.date}>Oct 2014 – Mar 2016</span>
                    <br/>
                    <span css={style.company}>Tawenda</span>
                    <span css={style.location}>Levallois-Perret, France</span>
                    <ul css={style.ul}>
                        <li css={style.li}>Creation from scratch of a Social Network free of limitations.</li>
                        <li css={style.li}>Research in informatics Engineering, contribution in many open sources
                            projects.
                        </li>
                        <li css={style.li}>Creation of an nginx Load Balancer with a node.js control API for live
                            streaming.
                        </li>
                        <li css={style.li}>
                            Main Technologies: Django, node.js, Git, HTML5, CSS3, Angular.js, jQuery, Django
                            applications, redis, socket-io.js, postgresql, postgis, Nginx, Action Script 3,
                            WebRTC, ffmpeg, Grunt.
                        </li>
                    </ul>
                </li>

                <li css={styleParent.li}>
                    <span css={style.title}>Lead Backend Engineer – Django/Python/Javascript</span>
                    <span css={style.date}>Jan 2014 – Oct 2014</span>
                    <br/>
                    <span css={style.company}>Buzzcar</span>
                    <span css={style.location}>Montreuil, France</span>
                    <ul css={style.ul}>
                        <li css={style.li}>Team leader of 4 people for maintaining and creating evolutions on main
                            site.
                        </li>
                        <li css={style.li}>Lead Front End decisions and manage system deployment and
                            integrations.
                        </li>
                        <li css={style.li}>Technologies: Django, Git, HTML5, CSS3, Backbone, jQuery, several
                            Django applications
                        </li>
                    </ul>
                </li>

                <li css={styleParent.li}>
                    <span css={style.title}>Web Front End Engineer – HTML5/CSS3/Javascript</span>
                    <span css={style.date}>Dec 2011 – Dec 2013</span>
                    <br/>
                    <span css={style.company}>e-TF1</span>
                    <span css={style.location}>Boulogne-Billancourt, France</span>
                    <ul css={style.ul}>
                        <li css={style.li}>Lead Front-end Developer on major TF1 websites (First French TV
                            Channel).
                        </li>
                        <li css={style.li}>Mainly Responsive Design based website working on web/mobile/tablet +
                            Web App
                        </li>
                        <li css={style.li}>
                            Technologies: HTML5, CSS3, Javascript: Backbone/Marionette, require.js, react,js,
                            Grunt, jQuery - Twig (Django template engine for PHP) – node.js.
                        </li>
                    </ul>
                </li>

                <li css={styleParent.li}>
                    <span css={style.title}>Consultant - Software Engineer</span>
                    <span css={style.date}>Sep 2011 – Dec 2011</span>
                    <br/>
                    <span css={style.company}>SII</span>
                    <span css={style.location}>Paris, France</span>
                    Video on Demand for SFR. Django/Python, PostgreSQL, HTML 5, CSS3, Javascript
                </li>

                <li css={styleParent.li}>
                    <span css={style.title}>Engineering Associate</span>
                    <span css={style.date}>Feb 2011 – Jul 2011</span>
                    <br/>
                    <span css={style.company}>24/7 Real Media</span>
                    <span css={style.location}>New York, USA</span>
                    <ul css={style.ul}>
                        <li css={style.li}>Development of a large number of tools for the company (Optimization,
                            Analysis, Web)
                        </li>
                        <li css={style.li}>Mainly Python/Django Framework, HTML 5, CSS3, Javascript (JQuery) and
                            C++.
                        </li>
                    </ul>
                </li>
            </ul>

            <p css={styleParent.p}>
                You can directly access to all these data by downloading my{' '}
                <a css={styleParent.a}
                   href="https://drive.google.com/file/d/1OeDkwv4dsVopfftQWAJXnr-Yp0InunFZ"
                   target="_blank"
                   rel="noopener noreferrer"
                >
                    resume
                </a>
            </p>
        </div>
    </div>
);

export default Experience;
