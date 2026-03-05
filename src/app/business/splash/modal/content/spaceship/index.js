import style from '../../style';

const Spaceship = () => (
    <div css={style.container}>
        <h1>
            Nice catch!
        </h1>
        <p>
            For rewarding you, you can now access to an old and mystic knowledge only reserved to the braves!
        </p>
        <br />
        <p>
            <a css={style.a} href="https://github.com/GuillaumeCisco/guillaumecisco" target="_blank" rel="noopener noreferrer">
                Here
            </a>
            {' '}
            you can find the code for making this website!
        </p>
        <p>
            And guess what? If you love so much this website, a desktop version thanks to electron is available, clone
            the repo and launch the npm scripts for creating os packages, you can either install them!
        </p>
    </div>
);

export default Spaceship;
