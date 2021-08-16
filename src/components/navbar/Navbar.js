import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Link from './Link';
import { WideContainer } from '../../styles';

import { Link as MyLink } from 'react-router-dom';


import { connect } from 'react-redux';
import { toggelMenu } from '../../redux/actions/actions';

import { BigBtn } from '../../styles/components';


const Navbar = ({ menu, toggleMenuBtn }) => {

    const [offset, setOffset] = useState(0);


    useEffect(() => {
        window.onscroll = () => {
            if (menu) {
                toggleMenuBtn('close');
            }
            setOffset(window.pageYOffset);
        }
    }, [offset]);

    return (
        <NavbarStyles
            style={{ opacity: offset > 50 && offset < 700 ? 0 : 1 }}
            onClick={(e) => !e.target.classList.contains('bi-list') && toggleMenuBtn('close')}
        >
            <WideContainer>
                <nav
                    className="nav-section"
                >
                    <div aria-label="home">
                        <Link path={"/"} content={"all"} />
                    </div>
                    <div className={menu ? "nav-list show_menu" : "nav-list"}>
                        <Link path={"/Photos"} content={"photo"} />
                        <Link path={"/Vectors"} content={"vector"} />
                        <Link path={"/Illistrations"} content={"illustration"} />
                        <Link path={"/Videos"} content={"videos"} />
                        <MyLink to={"/collection"}>
                            <BigBtn className="collection_btn">My Collection <i className="bi bi-plus-square"></i></BigBtn>
                        </MyLink>
                    </div>

                    <i
                        className="bi bi-list"
                        onClick={() => toggleMenuBtn('toggle')}
                    ></i>
                </nav>
            </WideContainer>
        </NavbarStyles>
    )
}

const mapStateToProps = state => ({
    menu: state.menuBtn.menuBtn,
})

const mapDispatchToProps = dispatch => ({
    toggleMenuBtn: (dir) => dispatch(toggelMenu(dir))
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);




const NavbarStyles = styled.header`
    position: fixed;
    background: white;
    z-index: 10;
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
            
            @media (max-width : 768px) {
                transform: translateX(100%);
                position: absolute;
                background: var(--dark-blue-color);
                text-align: center;
                top: 4em;
                display: block;
                transition: ease-in-out .3s;
                z-index : 0;
                line-height: 3;
                width: 100%;
                left: 0;
            }

            .collection_btn {
                    background-color: var(--green-color);
                    border-radius: 40px;
                    outline: none;
                    border: none;
                    padding: .5em 1em;
                    font-weight: 700;
                    border: 2px solid white;

                    &:hover {
                        transition: var(--transition);
                        background-color: white;
                        border-color:  var(--green-color);
                        cursor: pointer;
                    }
            }
        }

        .show_menu {
                transform: translateX(0%);
        }

        .bi-list {
            font-size: 3em;
            color: var(--text-gey-color);
            align-items: center;
            height: 100%;
            position: relative;
            top: 10px;
            display: none;

            &:hover {
                cursor: pointer;
                color: black;
            }

            @media (max-width : 768px) {
                display: block;
            }
        }

    }
`



