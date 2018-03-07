import { call, put } from 'redux-saga/effects';
import * as menu_actions from '../actions/menu_actions';
import wait from './wait';

export default function* close_menu() {
  yield put(menu_actions.hide_nav());
  yield put(menu_actions.hide_sub_nav());
  yield put(menu_actions.hide_contents());
  yield put(menu_actions.hide_bg());
  yield call(wait, 500);
  yield put(menu_actions.hide_lines());
  yield call(wait, 500);
  yield put(menu_actions.hide_menu());
}
