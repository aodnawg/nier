import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import Reducer from './reducers/index';
import mySaga from './sagas/index';

import pages from './../json/pages.json';

const initialState = {
  menu: {
    window_width: 500, // TODO: 0にする
    window_height: 500,
    pieces: [],
    grid: [],
    show_menu: false,
    show_bg: false,
    show_lines: false,
    show_bg_duration: 500,
    show_nav: false,
    show_contents: false,
    arranger: null,
  },
  contents: {
    current_page: 'MAP',
  },
  pages,
};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  Reducer,
  initialState,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(mySaga);

export default store;
