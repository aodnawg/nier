import * as contents_actions from '../actions/contents_actions';

function contents(state = {}, action) {
  switch (action.type) {
    case contents_actions.CHANGE_CURRENT_PAGE:

      return Object.assign({}, state, {
        current_page_index: action.index,
      });

    default:
      return state;
  }
}

export default contents;
