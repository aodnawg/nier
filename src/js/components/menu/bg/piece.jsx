import React from 'react';

export default class Piece extends React.Component {
  on_animationed() {
    console.log(1000);
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
      onAnimationEnd={() => this.on_animationed()}
    />)
  }
}
