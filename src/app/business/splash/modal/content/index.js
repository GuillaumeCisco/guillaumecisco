import PropTypes from 'prop-types';
import loadable from '@loadable/component';
import Loader from "../../../../common/components/loader";

const Core = loadable(() => import('./core'), {
    fallback: <Loader/>,
});
const Experience = loadable(() => import('./planets/experience'), {
    fallback: <Loader/>,
});
const Awards = loadable(() => import('./planets/awards'), {
    fallback: <Loader/>,
});
const Skills = loadable(() => import('./planets/skills'), {
    fallback: <Loader/>,
});
const Spaceship = loadable(() => import('./spaceship'), {
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
