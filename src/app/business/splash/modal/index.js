import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import actions from './actions';

import Core from './core/index';
import Experience from './planets/experience';
import Awards from './planets/awards';
import Skills from './planets/skills';
import Spaceshift from './spaceshift';

import Close from './close';

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

const Wrapper = styled('div')`
    overflow: auto;
    height: 100%;
`;

const CloseComponent = styled('div')`
    position: absolute;
    top 15px;
    right: 15px;
    cursor: pointer;
`;

const getComponent = (type) => {
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

class Modal extends React.Component {
    close = () => {
        const {setVisible} = this.props;
        setVisible(false);
    };

    render() {
        const {component} = this.props;

        return (
            <Container>
                <Wrapper>
                    {getComponent(component)}
                </Wrapper>
                <CloseComponent onClick={this.close}>
                    <Close />
                </CloseComponent>
            </Container>
);
    }
}

const noop = () => {};

Modal.propTypes = {
    setVisible: PropTypes.func,
    component: PropTypes.string,
};

Modal.defaultProps = {
    component: '',
    setVisible: noop,
};


const mapStateToProps = (state, ownProps) => ({
    component: state.modal.component,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    setVisible: actions.visible,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
