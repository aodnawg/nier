import * as menu_actions from '../actions/menu_actions';
import * as set_window_size from '../actions/set_window_size';

function menu(state = {}, action) {
  switch (action.type) {
    case set_window_size.SET_WINDOW_SIZE:
      return Object.assign({}, state, {
        window_width: action.value.width,
        window_height: action.value.height,
        pieces: action.value.pieces,
      });

    case menu_actions.SHOW_MENU:
      return Object.assign({}, state, { show_menu: true });

    case menu_actions.HIDE_MENU:
      return Object.assign({}, state, { show_menu: false });

    case menu_actions.CHANGE_BG_ANIMATION_STATE:
      return Object.assign({}, state, { bg: { animation_state: action.state } });

    default:
      return state;
  }
}

export default menu;