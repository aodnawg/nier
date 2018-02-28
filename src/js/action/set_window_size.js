export default function set_window_size() {
  return {
    type: 'SET_WINDOW_SIZE',
    value: {
      width: window.innerWidth,
      height: window.innerHeight,
    }
  }
}
