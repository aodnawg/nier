import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import Reducer from './reducer/reducer';
import mySaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware();

const initialState = {
  window_width: 500, // TODO: 0にする
  window_height: 500,
  pieces: [],
  show_menu: null,
  bg: { animation_state: 0 },
};
const store = createStore(
  Reducer,
  initialState,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(mySaga);

export default store;
