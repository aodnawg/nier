import store from '../store';

export const CHANGE_SUB_CONTENTS = 'CHANGE_SUB_CONTENTS';
export function change_sub_contents(page_index, sub_contents_index) {
  return {
    type: CHANGE_SUB_CONTENTS,
    page_index,
    sub_contents_index,
  };
}
