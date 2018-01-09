import React from 'react';
import styled, {css} from 'react-emotion';

import {H1} from '../../common/components/presentation';
import Background from './bg';

const requireContext = require.context('../../../../img/home/', true, /^\.\/.*\.jpg$/);
const items = requireContext.keys().map(requireContext);

const Container = styled('div')`
    width: 100%;
`;

const wrapper = css`
    margin: 30px auto;
    width: 80%;
`;


class Home extends React.Component {
    state = {
        imgLoaded: false,
    };
    onImgLoad = () => {
        if (!this.state.imgLoaded) {
            this.setState({imgLoaded: true});
        }
    };

    render() {
        return (<Container>
            {this.state.imgLoaded && <div className={wrapper}>
                <div>
                    <H1>Resume</H1>
                </div>
            </div>
            }
        </Container>);
    }
}

export default Home;
