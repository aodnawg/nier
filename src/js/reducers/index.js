import { combineReducers } from 'redux';

import menu from './menu';
import contents from './contents';

export default combineReducers({
  menu, contents,
});
