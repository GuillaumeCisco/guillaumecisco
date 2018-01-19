import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styled from 'react-emotion';

import routes from './routesMap';
import Splash from './business/splash';
import ServiceWorker from './business/common/components/serviceWorker';

const Container = styled('div')`
    height: 100%;
`;

const Routes = ({location}) => (
    <Container>
        <ServiceWorker />
        {Object.keys(routes).includes(location.type) ?
            <Splash page={location.type} /> :
            <h1>Not Found</h1>}
    </Container>
);

Routes.propTypes = {
    location: PropTypes.shape({}).isRequired,
};

const mapStateToProps = ({location}, ownProps) => ({location, ...ownProps});

export default connect(mapStateToProps)(Routes);
