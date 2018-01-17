import React from 'react';
import styled from 'react-emotion';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from './actions';

import Core from '../core/index';
import Experience from './planets/experience';
import Awards from './planets/awards';
import Hobbies from './planets/hobbies';
import Spaceshift from './spaceshift';


const Container = styled('div')`
    position: absolute;
    top: 5%;
    left: 5%;
    right: 5%;
    bottom: 5%;
    z-index: 2;
    text-align:center;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    font-size: 24px;
    padding: 3%;
    color: #000;
    
`;

const Wrapper = styled('div')`
    overflow: auto;
    height: 100%;
`;

const Close = styled('div')`
    position: absolute;
    top 5px;
    right: 5px;
    cursor: pointer;
`;

const getComponent = type => {
    switch (type) {
    case 'core':
        return <Core />;
    case 'experience':
        return <Experience />;
    case 'awards':
        return <Awards />;
    case 'hobbies':
        return <Hobbies />;
    case 'spaceshift':
        return <Spaceshift />;
    default:
        return null;
    }
};

class Modal extends React.Component {
    close = () => {
        this.props.setVisible(false);
    };

    render() {
        const {visible, component} = this.props;
        return visible ? <Container>
            <Wrapper>
                {getComponent(component)}
            </Wrapper>
            <Close onClick={this.close}>X</Close>
        </Container> : null;
    }
}

const mapStateToProps = (state, ownProps) => ({
    visible: state.modal.visible,
    component: state.modal.component,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    setVisible: actions.visible,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
