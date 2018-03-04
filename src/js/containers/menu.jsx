import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Menu from '../components/menu';
import * as menu_actions from '../actions/menu_actions';
import * as contents_actions from '../actions/contents_actions';

function mapStateToProps(state) {
  return {
    state: state.menu,
    contents: state.contents,
    pages: state.pages,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      menu_actions: bindActionCreators(menu_actions, dispatch),
      contents_actions: bindActionCreators(contents_actions, dispatch),
    },
  };
}

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);

export default Container;
