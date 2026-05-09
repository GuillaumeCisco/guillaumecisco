import style from './style';

const StaticIntro = () => {
    return (
        <div css={style.container}>
            <span
                aria-live="polite"
                aria-label="Welcome into my space"
            > </span>
        </div>
    );
};

export default StaticIntro;
