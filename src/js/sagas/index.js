import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions/menu_actions';

async function wait() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('finish');
    }, 500);
  });
}

function* openMenuSaga() {
  yield put(actions.show_menu());
  yield put(actions.show_lines());
  yield call(wait);
  yield put(actions.show_bg());
  yield call(wait);
  yield put(actions.show_contents());
  yield put(actions.show_nav());
}

function* closeMenuSaga() {
  yield put(actions.hide_nav());
  yield put(actions.hide_contents());
  yield put(actions.hide_bg());
  yield call(wait);
  yield put(actions.hide_lines());
  yield call(wait);
  yield put(actions.hide_menu());
}

export default function* mySaga() {
  yield takeLatest(actions.OPEN_MENU, openMenuSaga);
  yield takeLatest(actions.CLOSE_MENU, closeMenuSaga);
}
