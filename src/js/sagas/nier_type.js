import { put, select } from 'redux-saga/effects';
import * as page_actions from '../actions/page_actions';
import NieRTyping from '../NieRTyping';
import store from '../store';

export default function* nier_type() {
  const { pages, contents } = yield select();
  const { current_page_index } = contents;
  const page = pages[current_page_index];
  const nier_typing = new NieRTyping(page.name);
  const types = nier_typing.call();
  yield put(page_actions.change_page_title(current_page_index, ' '));
  for (let i = 0; i <= types.length - 1; i += 1) {
    setTimeout(() => {
      store.dispatch(page_actions.change_page_title(current_page_index, types[i]));
    }, 20 * i);
  }
}
