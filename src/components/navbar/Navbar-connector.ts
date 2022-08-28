import { connect, ConnectedProps } from 'react-redux';
import { toggelMenu } from '../../redux/actions/actions';

import { RootState, AppDispatch } from '../../redux/store';

const mapStateToProps = (state: RootState) => ({
  menu: state.menuBtn.menuBtn
});

const mapDispatchToProps = (dispatch: any) => ({
  toggleMenuBtn: (dir: 'close' | 'toggle') => dispatch(toggelMenu(dir))
});

export const connector = connect(mapStateToProps, mapDispatchToProps);

export type NavbarPropsFromRedux = ConnectedProps<typeof connector>;
