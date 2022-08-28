// Lib
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';

// Local
import { RootState, ThunkDispatchType } from '../../redux/store';
import SearchForm from './SearchForm';
import { MEDIA } from '../../images';
import { loadImages, loadVideos } from '../../redux/thunk/thunk';
import { changePage, toggelMenu } from '../../redux/actions/actions';
import { SearchHolder } from './overlay.styles';

interface OverlayProps extends PropsFromRedux {
  section: Section;
}

const Overlay = ({
  section,
  LoadThePage,
  LoadMainImages,
  startSearchingVideos,
  closeMenu
}: OverlayProps) => {
  const history = useHistory();

  useEffect(() => {
    if (!section.back && !section.video) {
      history.push('/');
      LoadThePage('all');
      LoadMainImages('all', '', 1);
    } else if (section.category === 'videos') {
      LoadThePage(section.category);
      startSearchingVideos('all', '', 1);
    } else {
      LoadThePage(section.category);
      LoadMainImages(section.category, '', 1);
    }
  }, []);

  return (
    <SearchHolder img={section.back as string} onClick={() => closeMenu('close')}>
      <h1 className="main-title">{section.title}</h1>
      <p className="desc">{section.dec}</p>

      <SearchForm
        section={section}
        startSearchingImages={LoadMainImages}
        startSearchingVideos={startSearchingVideos}
      />

      {section.category === 'videos' && (
        <video className="video" autoPlay muted loop>
          <source src={section.video} type="video/mp4" />
          <source src={section.video} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      )}
    </SearchHolder>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    section: state.nav
  };
};

const MapDispatchToProps = (dispatch: ThunkDispatchType) => ({
  LoadThePage: (page: string) => dispatch(changePage(page)),
  LoadMainImages: (kind: string, key: string, page: number) =>
    dispatch(loadImages(kind, key, page)),
  startSearchingVideos: (kind: string, key: string, page: number) =>
    dispatch(loadVideos(kind, key, page)),
  closeMenu: (dir: 'close' | 'toggle') => dispatch(toggelMenu(dir))
});

const connector = connect(mapStateToProps, MapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Overlay);
