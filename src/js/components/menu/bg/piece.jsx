import React from 'react';

export default class Piece extends React.Component {
  animate() {
    if (this.props.shown === null) {
      return '';
    }
    return this.props.shown ? 'fadein' : 'fadeout';
  }

  render() {
    const cn = this.animate();
    const style = { transitionDelay: `${this.props.delayTime}ms ` };

    return (<polygon
      fill="#E5E5C4"
      className={`${cn} piece`}
      points={this.props.xy}
      style={style}
    />);
  }
}
