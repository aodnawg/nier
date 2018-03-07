import { call, put, take } from 'redux-saga/effects';
import * as menu_actions from '../actions/menu_actions';
import * as contents_actions from '../actions/contents_actions';
import wait from './wait';
import nier_type from './nier_type';

export default function* change_contents() {
  while (true) {
    const action = yield take(contents_actions.CHANGE_CONTENTS);
    yield put(menu_actions.hide_sub_nav());
    yield put(contents_actions.change_current_page(action.index));
    yield call(nier_type);
    yield call(wait, 300);
    yield put(menu_actions.show_sub_nav());
  }
}
