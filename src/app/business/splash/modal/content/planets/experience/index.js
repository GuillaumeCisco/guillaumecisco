import styleParent from '../../../style';

const experience = [
    {
        dates: 'Now',
        role: 'Agentic Engineer',
        company: 'Current focus',
        summary: 'Engineering agents, their tools and the production systems that make them reliable and useful.',
    },
    {
        dates: '2021 to today',
        role: 'Senior Lead Full-Stack Engineer',
        company: 'Yubo',
        summary: 'Technical leadership for moderation tooling: live systems, product delivery, data-science integration and team execution.',
    },
    {
        dates: '2018 to 2021',
        role: 'Lead / Senior Full-Stack Engineer',
        company: 'Forest Admin · Owkin',
        summary: 'Product engineering, deep debugging and migration work across web platforms, distributed data and privacy-focused infrastructure.',
    },
    {
        dates: '2011 to 2018',
        role: 'Full-Stack & Engineering Lead',
        company: 'Dreem · Tawenda · Buzzcar · TF1 · SII',
        summary: 'Built and led web products from frontend to backend and operations, across media, health, mobility and consumer platforms.',
    },
];

const Experience = () => (
    <div css={styleParent.content}>
        <span css={styleParent.label}>03 / Systems</span>

        <h1 id="panel-title" css={styleParent.title}>
            Fifteen years from interface to infrastructure<span>.</span>
        </h1>

        <p css={styleParent.lead}>
            I grew up with the web stack, from browser rendering and responsive interfaces to APIs, data platforms,
            distributed systems and engineering leadership. That range now lets me ship AI systems end to end.
        </p>

        <h2 css={styleParent.sectionHeading}>Selected journey</h2>
        <div css={styleParent.timeline}>
            {experience.map(({dates, role, company, summary}) => (
                <article css={styleParent.timelineItem} key={`${dates}-${company}`}>
                    <time>{dates}</time>
                    <div>
                        <h3>{role} <span>at {company}</span></h3>
                        <p>{summary}</p>
                    </div>
                </article>
            ))}
        </div>

        <div css={styleParent.actions}>
            <a
                css={styleParent.action}
                href="https://drive.google.com/file/d/1OeDkwv4dsVopfftQWAJXnr-Yp0InunFZ"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Guillaume Cisco's resume in a new tab"
            >
                View résumé
            </a>
            <a
                css={styleParent.action}
                href="https://www.linkedin.com/in/guillaumecisco/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Full journey on LinkedIn
            </a>
        </div>
    </div>
);

export default Experience;
