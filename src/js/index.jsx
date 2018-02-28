import { Provider, connect } from 'react-redux';
import store from './store'
import Container from './container'
import ReactDOM from 'react-dom';
import React from 'react';

import '../scss/fade.scss'
import '../scss/reset.scss'

import set_window_size from './action/set_window_size'
import fade_piece from './action/fade_piece'

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById('content')
);

window.onload = () => {
  store.dispatch(set_window_size());

  let piece_qty = store.getState().pieces.length;
  let array = [...Array(piece_qty).keys()]
  for (let i = array.length - 1; i >= 0; i--){
    let rand = Math.floor( Math.random() * ( i + 1 ) );
    [array[i], array[rand]] = [array[rand], array[i]]
  }
  console.log(array);
  array.map((x,i) => {
    setTimeout(() => {
      console.log(x, i);
      store.dispatch(fade_piece(x));
    }, 1 * i);
    return null;
  });
};
