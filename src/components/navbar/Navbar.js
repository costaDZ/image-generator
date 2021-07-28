import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Link from '../Link';
import { WideContainer } from '../../styles';





const Navbar = () => {

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset)
        }
    }, []);

    return (
        <NavbarStyles style={{ opacity: offset > 20 && offset < 500 ? 0 : 1 }}>
            <WideContainer>
                <nav className="nav-section" >
                    <div aria-label="home">
                        <Link path={"/"} />
                    </div>
                    <div className="nav-list">
                        <Link path={"/Photos"} content={"photos"} />
                        <Link path={"/Vectors"} content={"vectors"} />
                        <Link path={"/Illistrations"} content={"illistrations"} />
                        <Link path={"/Videos"} content={"videos"} />
                    </div>
                </nav>
            </WideContainer>
        </NavbarStyles>
    )
}


export default Navbar;









const NavbarStyles = styled.header`
    position: fixed;
    background: white;
    z-index: 2;
    width: 100%;
    transition: ease-in-out .3s;

    height: 4em;
    border-bottom: 1px solid var(--green-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    .nav-section {
        display: flex;
        justify-content: space-between;

        .nav-list {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
`



