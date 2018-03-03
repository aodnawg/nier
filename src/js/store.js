import { createStore } from 'redux';
import Reducer from './reducer/reducer';

const initialState = {
  window_width: 500, // TODO: 0にする
  window_height: 500,
  pieces: [],
  show_menu: null,
  bg: { animation_state: 0 },
};
const store = createStore(Reducer, initialState);

export default store;
