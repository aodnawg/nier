import * as contents_actions from '../actions/contents_actions';

function contents(state = {}, action) {
  switch (action.type) {
    case contents_actions.CHANGE_CONTENTS:
      return Object.assign({}, state, { current_page: action.page });

    default:
      return state;
  }
}

export default contents;
