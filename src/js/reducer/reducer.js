import * as menu_actions from '../action/menu_actions';
import * as set_window_size from '../action/set_window_size';

export default function formReducer(state, action) {
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

    case menu_actions.CHANGE_PIECE_ANIMATION_STATE:
      return Object.assign({}, state, { pieces: action.pieces });

    default:
      return state;
  }
}
