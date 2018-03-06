export const CHANGE_PAGE_TITLE = 'CHANGE_PAGE_TITLE';
export function change_page_title(page_index, title) {
  return {
    type: CHANGE_PAGE_TITLE,
    page_index,
    title,
  };
}

export const CHANGE_SUB_CONTENTS = 'CHANGE_SUB_CONTENTS';
export function change_sub_contents(page_index, sub_contents_index) {
  return {
    type: CHANGE_SUB_CONTENTS,
    page_index,
    sub_contents_index,
  };
}
