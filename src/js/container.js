import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import App from './app';
import * as menu_actions from './actions/menu_actions';
import * as piece_actions from './actions/piece_actions';

function mapStateToProps(state) {
  return {
    value: state.value,
    state: state.menu, // TODO
    contents: state.contents,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      menu_actions: bindActionCreators(menu_actions, dispatch),
      piece_actions: bindActionCreators(piece_actions, dispatch),
    },
  };
}

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default Container;
