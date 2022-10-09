import { connect } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { handelLikedImages, addToCollection } from '../../redux/actions/actions';

export const mapStateToProps = (state: RootState) => ({
  likedItems: state.likedItem,
  collectionItems: state.myCollection
});

export const mapDispatchToProps = (dispatch: AppDispatch) => ({
  toggelLike: (item: Hit) => dispatch(handelLikedImages(item)),
  toggleCollection: (item: Hit) => dispatch(addToCollection(item))
});

export const connector = connect(mapStateToProps, mapDispatchToProps);
