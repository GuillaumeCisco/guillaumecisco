import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import universal from 'react-universal-component';

import PerfectScrollbar from 'react-perfect-scrollbar';

import actions from './actions';

import Close from './close';

const Core = universal(import('./core/index'));
const Experience = universal(import('./planets/experience'));
const Awards = universal(import('./planets/awards'));
const Skills = universal(import('./planets/skills'));
const Spaceshift = universal(import('./spaceshift'));

const Container = styled('div')`
    position: absolute;
    top: 5%;
    left: 5%;
    right: 5%;
    bottom: 5%;
    z-index: 2;
    text-align:center;
    background-color: rgba(0, 0, 0, 0.9);
    border-radius: 10px;
    font-size: 24px;
    padding: 4%;
    color: #fff;
`;

const CloseComponent = styled('div')`
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
`;

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
        case 'spaceshift':
            return <Spaceshift />;
        default:
            return null;
    }
};

Content.propTypes = {
    type: PropTypes.string.isRequired,
};

class Modal extends React.Component {
    close = () => {
        const {setVisible} = this.props;
        setVisible(false);
    };

    render() {
        const {component, visible} = this.props;

        return visible
            && (
            <Container>
                <PerfectScrollbar>
                    <Content type={component} />
                </PerfectScrollbar>
                <CloseComponent onClick={this.close}>
                    <Close />
                </CloseComponent>
            </Container>
);
    }
}

const noop = () => {
};

Modal.propTypes = {
    setVisible: PropTypes.func,
    component: PropTypes.string,
    visible: PropTypes.bool,
};

Modal.defaultProps = {
    component: '',
    setVisible: noop,
    visible: false,
};

const mapStateToProps = (state, ownProps) => ({
    component: state.modal.component,
    visible: state.modal.visible,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    setVisible: actions.visible,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
