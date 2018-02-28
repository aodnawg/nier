const SET_WINDOW_SIZE = 'SET_WINDOW_SIZE'

export default function formReducer(state, action) {
  switch (action.type) {
    case SET_WINDOW_SIZE:
      return Object.assign({}, state, {
        window_width: action.value.width,
        window_height: action.value.height,
      })

    default:
      return state;
  }
}
