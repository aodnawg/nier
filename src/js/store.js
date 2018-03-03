import { createStore } from 'redux';
import Reducer from './reducers/index';

const initialState = {
  menu: {
    window_width: 500, // TODO: 0にする
    window_height: 500,
    pieces: [],
    show_menu: null,
    bg: { animation_state: 0 },
  },
};

const store = createStore(Reducer, initialState);

export default store;
