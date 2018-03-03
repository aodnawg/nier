import store from '../store';

export const CHANGE_PIECE_ANIMATION_STATE = 'CHANGE_PIECE_ANIMATION_STATE';
export function change_piece_animation_state(key, animation_state) {
  const state = store.getState();
  state.pieces[key].animation_state = animation_state;

  return {
    type: CHANGE_PIECE_ANIMATION_STATE,
    pieces: state.pieces,
  };
}
