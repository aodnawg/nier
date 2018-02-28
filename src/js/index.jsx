import { Provider, connect } from 'react-redux';
import store from './store'
import Container from './container'
import ReactDOM from 'react-dom';
import React from 'react';

import '../scss/fade.scss'
import '../scss/reset.scss'

import set_window_size from './action/set_window_size'

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById('content')
);

window.onload = () => {
  store.dispatch(set_window_size());
};
