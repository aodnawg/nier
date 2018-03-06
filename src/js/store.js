import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import Reducer from './reducers/index';
import mySaga from './sagas/index';

import pages_raw from './../json/pages.json';

const pages = pages_raw.map(p =>
  Object.assign(p, {}, { current_sub_contents: 0 }));

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
    show_sub_nav: false,
    arranger: null,
  },
  contents: {
    current_page_index: 0,
  },
  pages,
};

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  Reducer,
  initialState,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(mySaga);

export default store;
