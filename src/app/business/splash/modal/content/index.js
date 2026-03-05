import PropTypes from 'prop-types';
import loadable from '@loadable/component';

const Core = loadable(() => import('./core'));
const Experience = loadable(() => import('./planets/experience'));
const Awards = loadable(() => import('./planets/awards'));
const Skills = loadable(() => import('./planets/skills'));
const Spaceship = loadable(() => import('./spaceship'));

const Content = ({type}) => {
  switch (type) {
    case 'core':
      return <Core />;
    case 'experience':
      return <Experience />;
    case 'awards':
      return <Awards />;
    case 'skills':
      return <Skills />;
    case 'spaceship':
      return <Spaceship />;
    default:
      return null;
  }
};

Content.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Content;
