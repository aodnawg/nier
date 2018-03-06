import { call, put, select, takeLatest } from 'redux-saga/effects';
import * as menu_actions from '../actions/menu_actions';
import * as page_actions from '../actions/page_actions';
import * as contents_actions from '../actions/contents_actions';

import NieRTyping from '../NieRTyping';

async function wait(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('finish');
    }, delay);
  });
}

function* nier_type() {
  const { pages, contents } = yield select();
  const { current_page_index } = contents;
  const page = pages[current_page_index];
  const nier_typing = new NieRTyping(page.name);
  const types = nier_typing.call();
  for (const nt of types) {
    yield put(page_actions.change_page_title(current_page_index, nt));
    yield call(wait, 20);
  }
}

function* openMenuSaga() {
  yield put(menu_actions.show_menu());
  yield put(menu_actions.show_lines());
  yield call(wait, 500);
  yield put(menu_actions.show_bg());
  yield call(wait, 500);
  yield put(menu_actions.show_contents());
  yield put(menu_actions.show_nav());
  yield call(nier_type);
}

function* closeMenuSaga() {
  yield put(menu_actions.hide_nav());
  yield put(menu_actions.hide_contents());
  yield put(menu_actions.hide_bg());
  yield call(wait, 500);
  yield put(menu_actions.hide_lines());
  yield call(wait, 500);
  yield put(menu_actions.hide_menu());
}

export default function* mySaga() {
  yield takeLatest(menu_actions.OPEN_MENU, openMenuSaga);
  yield takeLatest(menu_actions.CLOSE_MENU, closeMenuSaga);
  yield takeLatest(contents_actions.CHANGE_CONTENTS, nier_type);
}
