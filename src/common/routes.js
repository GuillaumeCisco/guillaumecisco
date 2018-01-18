import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styled from 'react-emotion';

import Splash from '../client/js/business/splash';
import ServiceWorker from '../client/js/business/common/components/serviceWorker';
import routes from './routesMap';

const Container = styled('div')`
    height: 100%;
`;

const Routes = ({location, visible}) =>
    (<Container>
        <ServiceWorker />
        {Object.keys(routes).includes(location.type) ?
            <Splash page={location.type} /> :
            <h1>Not Found</h1>}
    </Container>);

Routes.propTypes = {
    location: PropTypes.shape({}).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
    location: state.location,
    ...ownProps,
});

export default connect(mapStateToProps)(Routes);
