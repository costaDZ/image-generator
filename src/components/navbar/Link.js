import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';

import { connect } from 'react-redux';
import { changePage } from '../../redux/actions/actions';
import { loadImages } from '../../redux/thunk/thunk';




function Link({ path, content, changingPage, startLoadTheMainImages }) {
    return (
        <LinkStyles to={path} activeClassName="active-link" data-section={content} onClick={(e) => {
            changingPage(e.target.dataset.section)
            startLoadTheMainImages("", 1);
        }
        }>
            {
                content === "main" ?
                    <img src={logo} data-section={content} alt="logo" width='90px' /> :
                    content
            }
        </LinkStyles>
    )
}


const mapDispatchToProps = dispatch => ({
    changingPage: page => dispatch(changePage(page)),
    startLoadTheMainImages: (key, page) => dispatch(loadImages(key, page)),
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
`;


