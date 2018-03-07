import { call, put } from 'redux-saga/effects';
import * as menu_actions from '../actions/menu_actions';
import nier_type from './nier_type';

export default function* open_contents() {
  yield put(menu_actions.show_contents());
  yield put(menu_actions.show_nav());
  yield put(menu_actions.hide_sub_nav());
  yield put(menu_actions.show_sub_nav());
  yield call(nier_type);
}
