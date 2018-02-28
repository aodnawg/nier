const SET_WINDOW_SIZE = 'SET_WINDOW_SIZE'
const FADE_PIECE = 'FADE_PIECE'

export default function formReducer(state, action) {
  switch (action.type) {
    case SET_WINDOW_SIZE:
      return Object.assign({}, state, {
        window_width: action.value.width,
        window_height: action.value.height,
        pieces: action.value.pieces,
      })

    case FADE_PIECE:
      const state_n = Object.assign({}, state);
      state_n.pieces[action.index].shown = true;
      return Object.assign({}, state, state_n)

    default:
      return state;
  }
}
