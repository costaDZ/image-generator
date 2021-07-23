import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';

import { connect } from 'react-redux';
import { changePage } from '../redux/actions/actions';




function Link({ path, content, changingPage }) {
    return (
        <LinkStyles to={path} activeClassName="active-link" onClick={(e) => changingPage(e.target.innerHTML)}>
            {
                content ||
                <img src={logo} alt="logo" width='90px' />
            }
        </LinkStyles>
    )
}


const mapDispatchToProps = dispatch => ({
    changingPage: page => dispatch(changePage(page))
})

export default connect(null, mapDispatchToProps)(Link);



const LinkStyles = styled(NavLink)`
    color: black;
    text-decoration: none;
    transition: 0.2s;
    margin: 0 1em;

        &:not([href="/"])::after {
            content: "";
            display: block;
            height: 2px;
            background-color: var(--green-color);
            position: relative;
            border-radius: 20px;
            top: 5px;
            width: 0;
        }

    &.active-link::after {
            transition: ease .3s;
            width: 100%;
        }
    }
`;


