import { call, put } from 'redux-saga/effects';
import * as menu_actions from '../actions/menu_actions';
import open_contents from './open_contents';
import wait from './wait';

export default function* open_menu() {
  yield put(menu_actions.show_menu());
  yield put(menu_actions.show_lines());
  yield call(wait, 500);
  yield put(menu_actions.show_bg());
  yield call(wait, 500);
  yield call(open_contents);
}
