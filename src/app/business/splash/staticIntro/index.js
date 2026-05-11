import style from './style';

const StaticIntro = () => {
    return (
        <div css={style.container}>
            <span
                aria-live="polite"
                aria-label="Welcome into my space"
            >
                Welcome into (my) space. Please click on the core star for instructions.
            </span>
        </div>
    );
};

export default StaticIntro;
