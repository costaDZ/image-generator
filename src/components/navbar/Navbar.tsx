import React, { useState, useEffect } from 'react';
import Link from './Link';
import { Dispatch } from 'redux';

import { NavbarStyles } from './Navbar.styles';
import { WideContainer } from '../../styles';
import { Link as MyLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggelMenu } from '../../redux/actions/actions';
import { BigBtn } from '../../styles/components';

interface ImagesHolderProps {
  menu: boolean;
  toggleMenuBtn: (item: 'close' | 'toggle') => void;
}

const Navbar = ({ menu, toggleMenuBtn }: ImagesHolderProps) => {
  const [offset, setOffset] = useState(0);

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
            <MyLink to={'/collection'}>
              <BigBtn className="collection_btn">
                My Collection <i className="bi bi-plus-square"></i>
              </BigBtn>
            </MyLink>
          </div>
          <i className="bi bi-list" onClick={() => toggleMenuBtn('toggle')}></i>
        </nav>
      </WideContainer>
    </NavbarStyles>
  );
};

const mapStateToProps = (state: any) => ({
  menu: state.menuBtn.menuBtn
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleMenuBtn: (dir: 'close' | 'toggle') => dispatch(toggelMenu(dir))
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
