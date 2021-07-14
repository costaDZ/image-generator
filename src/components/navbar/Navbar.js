import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styled from 'styled-components';
import { WideContainer } from '../../styles';
import logo from '../../images/logo.png';

import { connect } from 'react-redux';
import { changePage } from '../../redux/actions/actions';




const Navbar = ({ changingPage }) => {

    let location = useLocation();
    const containerRef = useRef();

    const checkPage = () => {
        let currentLocation = location.pathname.toLowerCase();
        let navLinks = [...containerRef.current.children];

        navLinks.map(nav => {
            let currentTarget = nav.innerText.toLowerCase();

            if (currentLocation.slice(1) === currentTarget) {
                nav.style.cssText = "border-bottom: 2px solid #02be6e";
            } else {
                nav.style.cssText = "border-bottom: none";
            }
        })
    }

    useEffect(() => {
        checkPage();
    }, [location]);


    return (
        <MainNav>
            <WideContainer>
                <Toolbar >
                    <Logo aria-label="home">
                        <StyledLink to="/">
                            <img src={logo} alt="logo" width='90px' />
                        </StyledLink>
                    </Logo>
                    <ListContainer ref={containerRef} >
                        <StyledLink to="/Photos" onClick={(e) => changingPage(e.target.innerHTML)}>
                            photos
                        </StyledLink>
                        <StyledLink to="/Vectors" onClick={(e) => changingPage(e.target.innerHTML)}>
                            vectors
                        </StyledLink>
                        <StyledLink to="/Illistrations" onClick={(e) => changingPage(e.target.innerHTML)}>
                            illistrations
                        </StyledLink>
                        <StyledLink to="/Videos" onClick={(e) => changingPage(e.target.innerHTML)}>
                            videos
                        </StyledLink>
                    </ListContainer>
                </Toolbar>
            </WideContainer>
        </MainNav>
    )
}

const mapDispatchToProps = dispatch => ({
    changingPage: page => dispatch(changePage(page))
})

export default connect(null, mapDispatchToProps)(Navbar);












const MainNav = styled.header`
    height: 3em;
    border-bottom: 1px solid #b5b5b5;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
`
const Toolbar = styled.nav`
        display: flex;
        justify-content: space-between;

`
const Logo = styled.div`

`
const ListContainer = styled.div`
    display: flex;
    justifyContent: space-between;
    align-items: center;
`
const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    transition: 0.2s;
    margin: 0 1em;
`;
