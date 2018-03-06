/* TODO ここは地獄。 */

import { call, put, select, takeLatest, take, fork } from 'redux-saga/effects';
import store from '../store';
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
  yield put(page_actions.change_page_title(current_page_index, ' '));
  for (let i = 0; i <= types.length - 1; i += 1) {
    setTimeout(() => {
      store.dispatch(page_actions.change_page_title(current_page_index, types[i]));
    }, 20 * i);
  }
}

function* open_contents() {
  yield put(menu_actions.show_contents());
  yield put(menu_actions.show_nav());
  yield put(menu_actions.hide_sub_nav());
  yield put(menu_actions.show_sub_nav());
  yield call(nier_type);
}

function* openMenuSaga() {
  yield put(menu_actions.show_menu());
  yield put(menu_actions.show_lines());
  yield call(wait, 500);
  yield put(menu_actions.show_bg());
  yield call(wait, 500);
  yield call(open_contents);
}

function* closeMenuSaga() {
  yield put(menu_actions.hide_nav());
  yield put(menu_actions.hide_sub_nav());
  yield put(menu_actions.hide_contents());
  yield put(menu_actions.hide_bg());
  yield call(wait, 500);
  yield put(menu_actions.hide_lines());
  yield call(wait, 500);
  yield put(menu_actions.hide_menu());
}

function* change_contents() {
  while (true) {
    const action = yield take(contents_actions.CHANGE_CONTENTS);
    yield put(menu_actions.hide_sub_nav());
    yield put(contents_actions.change_current_page(action.index));
    yield call(nier_type);
    yield call(wait, 300);
    yield put(menu_actions.show_sub_nav());
  }
}

export default function* mySaga() {
  yield takeLatest(menu_actions.OPEN_MENU, openMenuSaga);
  yield takeLatest(menu_actions.CLOSE_MENU, closeMenuSaga);
  yield fork(change_contents);
}
