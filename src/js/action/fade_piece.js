import store from '../store'

export default function fade_piece(index) {
  return { type: 'FADE_PIECE',
    index: index, }
}
