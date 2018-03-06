import 'babel-polyfill';

import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import store from './store';
import Container from './container';

import '../scss/index.scss';
import set_window_size from './actions/set_window_size';

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById('content'),
);

window.onload = () => {
  store.dispatch(set_window_size());
};

window.addEventListener(
  'resize',
  () => store.dispatch(set_window_size()), false,
);


store.dispatch({ type: 'OPEN_MENU' });
