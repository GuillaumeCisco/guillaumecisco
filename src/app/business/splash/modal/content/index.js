import PropTypes from 'prop-types';
import loadable from '@loadable/component';
import Loader from "../../../../common/components/loader";

const Core = loadable(() => import(/* webpackChunkName: "core" */ './core'), {
    fallback: <Loader/>,
});
const Experience = loadable(() => import(/* webpackChunkName: "experience" */ './planets/experience'), {
    fallback: <Loader/>,
});
const Awards = loadable(() => import(/* webpackChunkName: "awards" */ './planets/awards'), {
    fallback: <Loader/>,
});
const Skills = loadable(() => import(/* webpackChunkName: "skills" */ './planets/skills'), {
    fallback: <Loader/>,
});
const Spaceship = loadable(() => import(/* webpackChunkName: "spaceship" */ './spaceship'), {
    fallback: <Loader/>,
});

const Content = ({type}) => {
    switch (type) {
        case 'core':
            return <Core/>;
        case 'experience':
            return <Experience/>;
        case 'awards':
            return <Awards/>;
        case 'skills':
            return <Skills/>;
        case 'spaceship':
            return <Spaceship/>;
        default:
            return null;
    }
};

Content.propTypes = {
    type: PropTypes.string.isRequired,
};

export default Content;
