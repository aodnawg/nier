import Arranger from '../arranger';

export const SET_WINDOW_SIZE = 'SET_WINDOW_SIZE';

export default function set_window_size() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const arranger = new Arranger(width, height);

  return {
    type: 'SET_WINDOW_SIZE',
    value: {
      width,
      height,
      pieces: arranger.call(),
    },
  };
}
