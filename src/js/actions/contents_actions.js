export const CHANGE_CONTENTS = 'CHANGE_CONTENTS'; // TODO: change_pageの方が適切
export function change_contents(index) {
  return {
    type: CHANGE_CONTENTS,
    index,
  };
}

export const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
export function change_current_page(index) {
  return {
    type: CHANGE_CURRENT_PAGE,
    index,
  };
}
