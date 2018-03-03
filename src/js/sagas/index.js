import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from '../action/menu_actions';

async function wait() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('nyan');
    }, 3000);
  });
}

function* someAnimationSaga() {
  yield call(wait);
  yield put(actions.show_menu());
}

export default function* mySaga() {
  yield takeLatest(actions.HOGE, someAnimationSaga);
}
