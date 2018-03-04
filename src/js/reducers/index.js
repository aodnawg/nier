import { combineReducers } from 'redux';

import menu from './menu';
import contents from './contents';
import pages from './pages';

export default combineReducers({
  menu, contents, pages,
});
