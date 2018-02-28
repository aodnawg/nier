import { createStore } from 'redux';
import Reducer from './reducer/reducer'

const initialState = {
  window_width: 500, // TODO: 0にする
  window_height: 500,
  pieces: [],
};
const store = createStore(Reducer, initialState);

export default store;
