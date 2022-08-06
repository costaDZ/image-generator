import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';

import { connect } from 'react-redux';
import { changePage } from '../../redux/actions/actions';
import { loadImages, loadVideos } from '../../redux/thunk/thunk';

interface ImagesHolderProps {
  path: any;
  content: any;
  changingPage: any;
  startLoadImages: any;
  startLoadVideos: any;
}

const Link: React.FC<ImagesHolderProps> = ({
  path,
  content,
  changingPage,
  startLoadImages,
  startLoadVideos
}: ImagesHolderProps) => {
  function changeTargetPage(e: any) {
    const currentSec = e.target.dataset.section;
    changingPage(currentSec);
    if (currentSec === 'videos') {
      startLoadVideos(currentSec, '', 1);
    } else {
      startLoadImages(currentSec, '', 1);
    }
  }

  return (
    <LinkStyles
      to={path}
      activeClassName="active-link"
      data-section={content}
      onClick={(e) => changeTargetPage(e)}>
      {content === 'all' ? (
        <img src={logo} data-section={content} alt="logo" width="90px" />
      ) : (
        content
      )}
    </LinkStyles>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  changingPage: (page: any) => dispatch(changePage(page)),
  startLoadImages: (currentSec: any, key: any, page: any) =>
    dispatch(loadImages(currentSec, key, page)),
  startLoadVideos: (currentSec: any, key: any, page: any) =>
    dispatch(loadVideos(currentSec, key, page))
});

export default connect(null, mapDispatchToProps)(Link);

const LinkStyles = styled(NavLink)`
  color: black;
  text-decoration: none;
  transition: 0.2s;
  margin: 0 1em;

  &:not([href='/']) {
    @media (max-width: 768px) {
      margin: 0;
      color: var(--text-grey-color);
      -webkit-transition: var(--transition);
      transition: var(--transition);
      padding: 0.5em 1em;
      margin: auto;
      width: 25%;
      display: block;
      &:hover {
        background-color: var(--green-color);
        color: black;
      }
    }

    &::after {
      content: '';
      display: block;
      height: 2px;
      background-color: var(--green-color);
      position: relative;
      border-radius: 20px;
      top: 5px;
      width: 0;
    }

    &.active-link::after {
      transition: ease 0.3s;
      width: 100%;
    }
  }
`;
