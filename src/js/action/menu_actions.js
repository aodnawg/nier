export const SHOW_MENU = 'SHOW_MENU';
export function show_menu() {
  return {
    type: SHOW_MENU,
  };
}

export const HIDE_MENU = 'HIDE_MENU';
export function hide_menu() {
  return {
    type: HIDE_MENU,
  };
}

export const CHANGE_BG_ANIMATION_STATE = 'CHANGE_BG_ANIMATION_STATE'; // TODO:ファイルの分け方がめちゃくちゃ
export function change_bg_animation_state(state) {
  return {
    type: CHANGE_BG_ANIMATION_STATE,
    state,
  };
}

export const HOGE = 'HOGE';
export function hoge(state) {
  console.log('hoge pushed');
  return {
    type: HOGE,
    state,
  };
}
