import React from 'react';

export default class Piece extends React.Component {
  on_animation_start() {
    this.props.actions.piece_actions
      .change_piece_animation_state(this.props.index, 0);
  }

  on_animation_end() {
    this.props.actions.piece_actions
      .change_piece_animation_state(this.props.index, 2);

    this.props.hoge();
  }　　　　　

  on_animation_iteration() {
    this.props.actions.piece_actions
      .change_piece_animation_state(this.props.index, 1);
  }

  animate() {
    if (this.props.shown === null) {
      return '';
    }
    return this.props.shown ? 'fadein' : 'fadeout';
  }

  render() {
    const cn = this.animate();
    const delay = Math.floor(Math.random() * 400);
    const style = { animationDelay: `${delay}ms ` };

    return (<polygon
      fill="#fff"
      className={`${cn} piece`}
      points={this.props.xy}
      style={style}
      onAnimationStart={() => this.on_animation_start()}
      onAnimationEnd={() => this.on_animation_end()}
      onAnimationIteration={() => this.on_animation_iteration()}
    />);
  }
}
