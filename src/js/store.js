import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import Reducer from './reducers/index';
import mySaga from './sagas/index';

const initialState = {
  menu: {
    window_width: 500, // TODO: 0にする
    window_height: 500,
    pieces: [],
    show_menu: false,
    show_bg: false,
    show_contents: false,
    bg: { animation_state: 0 },
  },
};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  Reducer,
  initialState,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(mySaga);

export default store;
