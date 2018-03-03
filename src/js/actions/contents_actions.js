export const CHANGE_CONTENTS = 'CHANGE_CONTENTS';
export function change_contents(page) {
  return {
    type: CHANGE_CONTENTS,
    page,
  };
}
