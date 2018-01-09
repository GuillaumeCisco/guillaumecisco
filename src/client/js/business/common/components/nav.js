import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'react-emotion';
import Link from 'redux-first-router-link';
import {connect} from 'react-redux';

import Supernova from './supernova';

const Container = styled('div')`
    text-align: center;    
`;

const Ul = styled('ul')`
    border-top: 1px solid #ccc;
    margin-top: 30px;
    padding-top: 15px;
    & li {                
        margin: 0 5%; 
        display: inline-block;
        font-size: 16px;
    }
`;

const base = css`
    text-decoration: none;
    color: black;
`;

const link = css`        
    ${base};
    padding: 8px 0;
    font-size: 44px;
    font-weight: 200;
`;

class Nav extends React.Component {
    link = route => css`
        ${base};
        color: ${this.props.location.type === route ? '#03070e' : '#444257'};
    `;

    render() {
        return (<Container>
            <h1>
                <Link to="/" className={link}>
                    Guillaume Cisco
                </Link>
            </h1>
            {typeof window !== 'undefined' && <Supernova />}
            <Ul>
                <li>
                    <Link to="/menu" className={this.link('RESUME')}>
                        Resume
                    </Link>
                </li>
            </Ul>
        </Container>);
    }
}

Nav.propTypes = {
    location: PropTypes.shape({
        type: PropTypes.string,
    }).isRequired,
};

const mapStateToProps = ({location}, ownProps) => ({location, ...ownProps});

export default connect(mapStateToProps)(Nav);
