export const OPEN_MENU = 'OPEN_MENU';
export function open_menu() {
  return {
    type: OPEN_MENU,
  };
}

export const SHOW_MENU = 'SHOW_MENU';
export function show_menu() {
  return {
    type: SHOW_MENU,
  };
}

export const SHOW_LINES = 'SHOW_LINES';
export function show_lines() {
  return {
    type: SHOW_LINES,
  };
}

export const SHOW_BG = 'SHOW_BG';
export function show_bg() {
  return {
    type: SHOW_BG,
  };
}

export const SHOW_CONTENTS = 'SHOW_CONTENS';
export function show_contents() {
  return {
    type: SHOW_CONTENTS,
  };
}

export const SHOW_NAV = 'SHOW_NAV';
export function show_nav() {
  return {
    type: SHOW_NAV,
  };
}

export const CLOSE_MENU = 'CLOSE_MENU';
export function close_menu() {
  return {
    type: CLOSE_MENU,
  };
}

export const HIDE_NAV = 'HIDE_NAV';
export function hide_nav() {
  return {
    type: HIDE_NAV,
  };
}

export const HIDE_CONTENTS = 'HIDE_CONTENTS';
export function hide_contents() {
  return {
    type: HIDE_CONTENTS,
  };
}

export const HIDE_BG = 'HIDE_BG';
export function hide_bg() {
  return {
    type: HIDE_BG,
  };
}

export const HIDE_LINES = 'HIDE_LINES';
export function hide_lines() {
  return {
    type: HIDE_LINES,
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

export const SHOW_SUB_NAV = 'SHOW_SUB_NAV';
export function show_sub_nav() {
  return {
    type: SHOW_SUB_NAV,
    show_sub_nav: true,
  };
}

export const HIDE_SUB_NAV = 'HIDE_SUB_NAV';
export function hide_sub_nav() {
  return {
    type: HIDE_SUB_NAV,
    show_sub_nav: false,
  };
}
