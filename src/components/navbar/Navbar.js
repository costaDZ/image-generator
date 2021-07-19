import React from 'react';
import styled from 'styled-components';

import Link from '../Link';
import { WideContainer } from '../../styles';





const Navbar = () => {

    return (
        <NavbarStyles>
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
    height: 3em;
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



