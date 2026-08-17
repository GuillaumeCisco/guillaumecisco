import style from '../../style';

const Spaceship = () => (
    <div css={style.content}>
        <span css={style.label}>Secret orbit / Source</span>

        <h1 id="panel-title" css={style.title}>
            Nice catch<span>.</span>
        </h1>

        <p css={style.lead}>
            You found the original easter egg. This universe is not a video or a static background: the stars,
            trajectories and orbiting objects are rendered and animated in code.
        </p>

        <p css={style.note}>
            The project combines React, server-side rendering, streamed Emotion styles, code-split interactions, a PWA
            service worker and a Tauri desktop target.
        </p>

        <div css={style.actions}>
            <a
                css={style.action}
                href="https://github.com/GuillaumeCisco/guillaumecisco"
                target="_blank"
                rel="noopener noreferrer"
            >
                Explore the source
            </a>
        </div>
    </div>
);

export default Spaceship;
