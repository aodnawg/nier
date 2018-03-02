import React from 'react';
import Piece from './piece';

import store from '../../../store';

export default class Pieces extends React.Component {
  has_animation_finished() {
    const { pieces } = store.getState();
    const animation_states = pieces.map(v => v.animation_state);

    const count = animation_states.reduce((pre, crr) => {
      let result = pre;
      if (crr === 2) {
        result += 1;
      }
      return result;
    });

    if (count - 1 === pieces.length) {
      this.actions.menu_actions.change_bg_animation_state(2);
    } else {
      this.actions.menu_actions.change_bg_animation_state(2);
    }
  }

  render() {
    return (<g
      filter="url(#polycleaner)"
      className="pieces"
    >
      { this.props.pieces.map(p => (<Piece
          actions={this.props.actions}
          key={p.key}
          index={p.key}
          animationState={p.animation_state}
          xy={p.xy}
          shown={this.props.shown}
          hoge={this.has_animation_finished}
      />)) }
            </g>);
  }
}
