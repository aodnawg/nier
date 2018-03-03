import React from 'react';

export default class Piece extends React.Component {
  on_animation_end() {
    if (this.props.isDelayTimeMax) {
      this.props.actions.menu_actions.change_bg_animation_state(2);
    }
  }

  on_animation_start() {
    if (this.props.isDelayTimeMin) {
      this.props.actions.menu_actions.change_bg_animation_state(1);
    }
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
    const style = { animationDelay: `${this.props.delayTime}ms ` };

    return (<polygon
      fill="#fff"
      className={`${cn} piece`}
      points={this.props.xy}
      style={style}
      onAnimationEnd={() => this.on_animation_end()}
      onAnimationStart={() => this.on_animation_start()}
    />);
  }
}
