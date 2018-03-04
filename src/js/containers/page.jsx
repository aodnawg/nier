import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Page from '../components/menu/contents/page';
import * as page_actions from '../actions/page_actions';

function mapStateToProps(state) {
  return {
    contents: state.contents,
    pages: state.pages,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      page_actions: bindActionCreators(page_actions, dispatch),
    },
  };
}

const pageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);

export default pageContainer;
