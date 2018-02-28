import App from './app'
import { Provider, connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    // propsを通して取得する際に使う名前: Storeのstateの値
    value: state.value,
    hoge: state.hoge,
    state: state,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onClick(value) {
      dispatch(send(value));
    },
  };
}
const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default Container;
