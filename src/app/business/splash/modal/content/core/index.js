import styleParent from '../../style';

import Github from '../../../../../common/ui/svgs/github';
import LinkedIn from '../../../../../common/ui/svgs/linkedin';
import {AgentsIcon, ProductIcon, SystemsIcon} from '../../../supernova/orbitIcons';

const Core = () => (
    <div css={styleParent.content}>
        <span css={styleParent.label}>01 / About</span>

        <h1 id="panel-title" css={styleParent.title}>
            Engineering intelligence into products<span>.</span>
        </h1>

        <p css={styleParent.lead}>
            I&apos;m Guillaume, an Agentic Engineer with 15 years of full-stack experience. I turn ambitious AI ideas
            into reliable products — from orchestration and tool use to the interfaces, APIs and infrastructure around
            them.
        </p>

        <h2 css={styleParent.sectionHeading}>What I do now</h2>

        <div css={styleParent.rows}>
            <div css={styleParent.row}>
                <AgentsIcon/>
                <div>
                    <strong>Agent systems</strong>
                    <p>Tool use, orchestration and context</p>
                </div>
                <span aria-hidden="true">→</span>
            </div>
            <div css={styleParent.row}>
                <SystemsIcon/>
                <div>
                    <strong>Production foundations</strong>
                    <p>Evals, observability and guardrails</p>
                </div>
                <span aria-hidden="true">→</span>
            </div>
            <div css={styleParent.row}>
                <ProductIcon/>
                <div>
                    <strong>Full-stack delivery</strong>
                    <p>Product, platform and infrastructure</p>
                </div>
                <span aria-hidden="true">→</span>
            </div>
        </div>

        <div css={styleParent.actions}>
            <a
                css={styleParent.action}
                href="https://www.linkedin.com/in/guillaumecisco/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <LinkedIn width={26} height={26}/>
                View LinkedIn
            </a>
            <a
                css={styleParent.action}
                href="https://github.com/GuillaumeCisco"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Github width={26} height={26} color="currentColor"/>
                View GitHub
            </a>
        </div>
    </div>
);

export default Core;
