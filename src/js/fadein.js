import store from './store';
import fade_piece from './action/fade_piece';

export default function fadein() {
  const piece_qty = store.getState().pieces.length;
  const array = [...Array(piece_qty).keys()];
  for (let i = array.length - 1; i >= 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [array[i], array[rand]] = [array[rand], array[i]];
  }
  array.map((x, i) => {
    setTimeout(() => {
      store.dispatch(fade_piece(x));
    }, 1 * i);
    return null;
  });
}
