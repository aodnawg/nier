import * as page_actions from '../actions/page_actions';

function page(state = {}, action) {
  switch (action.type) {
    case page_actions.CHANGE_SUB_CONTENTS:
      return state.map((v, i) => {
        if (i === action.page_index) {
          return Object.assign(v, {}, { current_sub_contents: action.sub_contents_index });
        }
        return v;
      });

    case page_actions.CHANGE_PAGE_TITLE:
      return state.map((v, i) => {
        if (i === action.page_index) {
          return Object.assign(v, {}, { title: action.title });
        }
        return v;
      });

    default:
      return state;
  }
}

export default page;
