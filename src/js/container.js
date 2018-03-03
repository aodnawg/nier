import App from './app';
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as menu_actions from './action/menu_actions';
import * as piece_actions from './action/piece_actions';

function mapStateToProps(state) {
  return {
    value: state.value,
    state,
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
