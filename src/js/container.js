import App from './app';
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as menu_actions from './action/menu_actions';

function mapStateToProps(state) {
  return {
    // propsを通して取得する際に使う名前: Storeのstateの値
    value: state.value,
    hoge: state.hoge,
    state,
  };
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(menu_actions, dispatch) };
}
const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default Container;
