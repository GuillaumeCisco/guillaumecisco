import styleParent from '../../../style';

const principles = [
    {
        title: 'Start with the real job',
        description: 'The agent is not the product. The useful outcome, and the person responsible for it, come first.',
    },
    {
        title: 'Design for failure',
        description: 'Good autonomous systems expose uncertainty, recover cleanly and know when to hand control back.',
    },
    {
        title: 'Build the whole system',
        description: 'Models need strong tools, APIs, data, interfaces and infrastructure before they create durable value.',
    },
    {
        title: 'Improve through evidence',
        description: 'Evals, production signals and user feedback turn a clever prototype into dependable software.',
    },
];

const Product = () => (
    <div css={styleParent.content}>
        <span css={styleParent.label}>04 / Product</span>

        <h1 id="panel-title" css={styleParent.title}>
            Autonomy needs product judgement<span>.</span>
        </h1>

        <p css={styleParent.lead}>
            I like difficult technical problems, but I care most about what the system changes for its users. My work
            sits where AI capability, software quality and product clarity meet.
        </p>

        <h2 css={styleParent.sectionHeading}>How I approach the work</h2>
        <ol css={styleParent.principles}>
            {principles.map(({title, description}) => (
                <li key={title}>
                    <div>
                        <strong>{title}</strong>
                        <p>{description}</p>
                    </div>
                </li>
            ))}
        </ol>

        <h2 css={styleParent.sectionHeading}>Outside the terminal</h2>
        <p css={styleParent.note}>
            French gastronomy, wine and beer culture, strength training, swimming, technical books, politics,
            geopolitics and economics. Still curious, still learning.
        </p>
    </div>
);

export default Product;
