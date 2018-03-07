import { takeLatest, fork } from 'redux-saga/effects';
import * as menu_actions from '../actions/menu_actions';

import close_menu from './close_menu';
import open_menu from './open_menu';
import change_contents from './change_contents';

export default function* root_saga() {
  yield takeLatest(menu_actions.OPEN_MENU, open_menu);
  yield takeLatest(menu_actions.CLOSE_MENU, close_menu);
  yield fork(change_contents);
}
