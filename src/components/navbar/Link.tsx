import React, { MouseEvent } from 'react';

import logo from '../../images/logo.png';
import { LinkStyles } from './link.styles';
import { connect, ConnectedProps } from 'react-redux';
import { changePage } from '../../redux/actions/actions';
import { loadImages, loadVideos } from '../../redux/thunk/thunk';

import { AppDispatch } from '../../redux/store';
import { ThunkDispatch } from 'redux-thunk';

interface LinkProps extends LinkPropsFromRedux {
  path: string;
  content: Page;
}

const Link: React.FC<LinkProps> = ({
  path,
  content,
  changingPage,
  startLoadImages,
  startLoadVideos
}: LinkProps) => {
  function changeTargetPage(e: MouseEvent<HTMLAnchorElement>) {
    if (!(e.target instanceof HTMLAnchorElement)) {
      return;
    }

    const currentSec = e.target.dataset.section as Page;

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
      onClick={changeTargetPage}>
      {content === 'all' ? (
        <img src={logo} data-section={content} alt="logo" width="90px" />
      ) : (
        content
      )}
    </LinkStyles>
  );
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => ({
  changingPage: (page: Page) => dispatch(changePage(page)),
  startLoadImages: (currentSec: string, key: string, page: number) =>
    dispatch(loadImages(currentSec, key, page)),
  startLoadVideos: (currentSec: string, key: string, page: number) =>
    dispatch(loadVideos(currentSec, key, page))
});

const connector = connect(null, mapDispatchToProps);

type LinkPropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Link);
