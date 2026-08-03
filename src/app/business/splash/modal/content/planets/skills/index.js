import styleParent from '../../../style';

const agentCapabilities = [
    {
        title: 'Orchestration & tool use',
        description: 'Multi-step workflows, reliable tool contracts and systems that can act — not just answer.',
    },
    {
        title: 'Context & memory',
        description: 'Retrieval, state and context engineering designed around the job the agent needs to perform.',
    },
    {
        title: 'Evals & guardrails',
        description: 'Evaluation loops, observability and human control for agents that operate in production.',
    },
    {
        title: 'Agent experience',
        description: 'Interfaces that make autonomy understandable, interruptible and useful to real people.',
    },
];

const foundations = [
    ['Languages', 'Python, JavaScript / TypeScript, SQL'],
    ['Product UI', 'React, Redux, SSR, accessible interaction design'],
    ['Platforms', 'Node.js, Django, APIs, event-driven systems'],
    ['Data', 'PostgreSQL, Redis, Elasticsearch, MongoDB, BigQuery'],
    ['Infrastructure', 'Docker, Kubernetes, Google Cloud, AWS, CI/CD'],
    ['Engineering', 'Architecture, debugging, performance, team leadership'],
];

const Skills = () => (
    <div css={styleParent.content}>
        <span css={styleParent.label}>02 / Agents</span>

        <h1 id="panel-title" css={styleParent.title}>
            I build agents that do useful work<span>.</span>
        </h1>

        <p css={styleParent.lead}>
            My focus has moved from building individual features to engineering complete agentic systems: the model,
            tools, context, evaluation loop and product experience working as one reliable whole.
        </p>

        <h2 css={styleParent.sectionHeading}>Agentic engineering</h2>
        <div css={styleParent.rows}>
            {agentCapabilities.map(({title, description}, index) => (
                <div css={styleParent.row} key={title}>
                    <span aria-hidden="true">0{index + 1}</span>
                    <div>
                        <strong>{title}</strong>
                        <p>{description}</p>
                    </div>
                    <span aria-hidden="true">→</span>
                </div>
            ))}
        </div>

        <h2 css={styleParent.sectionHeading}>Full-stack foundations</h2>
        <div css={styleParent.columns}>
            {foundations.map(([title, description]) => (
                <div css={styleParent.column} key={title}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            ))}
        </div>

        <p css={styleParent.note}>
            I choose tools for the system in front of me. The durable skill is turning an ambiguous problem into a
            product that is observable, maintainable and pleasant to use.
        </p>
    </div>
);

export default Skills;
