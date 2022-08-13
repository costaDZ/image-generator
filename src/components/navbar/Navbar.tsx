import React, { useState, useEffect } from 'react';

import Link from './Link';
import { NavbarStyles } from './Navbar.styles';
import { WideContainer } from '../../styles';
import { Link as RouterLink } from 'react-router-dom';
import { BigBtn } from '../../styles/components';
import { connector, NavbarPropsFromRedux } from './Navbar-connector';

const Navbar = ({ menu, toggleMenuBtn }: NavbarPropsFromRedux) => {
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    window.onscroll = () => {
      if (menu) {
        toggleMenuBtn('close');
      }
      setOffset(window.pageYOffset);
    };
  }, [offset]);

  return (
    <NavbarStyles
      style={{ opacity: offset > 50 && offset < 700 ? 0 : 1 }}
      onClick={(e: React.SyntheticEvent<HTMLElement>) => {
        const target = e.target as Element;
        target.classList.contains('bi-list') && toggleMenuBtn('close');
      }}>
      <WideContainer>
        <nav className="nav-section">
          <div aria-label="home">
            <Link path={'/'} content={'all'} />
          </div>
          <div className={menu ? 'nav-list show_menu' : 'nav-list'}>
            <Link path={'/Photos'} content={'photo'} />
            <Link path={'/Vectors'} content={'vector'} />
            <Link path={'/Illistrations'} content={'illustration'} />
            <Link path={'/Videos'} content={'videos'} />
            <RouterLink to={'/collection'}>
              <BigBtn className="collection_btn">
                My Collection <i className="bi bi-plus-square"></i>
              </BigBtn>
            </RouterLink>
          </div>
          <i className="bi bi-list" onClick={() => toggleMenuBtn('toggle')}></i>
        </nav>
      </WideContainer>
    </NavbarStyles>
  );
};

export default connector(Navbar);
