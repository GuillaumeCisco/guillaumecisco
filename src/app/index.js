import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styled from '@emotion/styled';
import {NOT_FOUND} from 'redux-first-router';

import Splash from './business/splash';
import ServiceWorker from './business/common/components/serviceWorker';

const Container = styled('div')`
    height: 100%;
`;

const Routes = ({location}) => (
    <Container>
        <ServiceWorker />
        {location.type === NOT_FOUND
            ? (
                <h1>
                    404 - Not found
                </h1>
            )
            : <Splash />}
    </Container>
);

Routes.propTypes = {
    location: PropTypes.shape({
        type: PropTypes.string,
    }).isRequired,
};

const mapStateToProps = ({location}, ownProps) => ({location, ...ownProps});

export default connect(mapStateToProps)(Routes);
