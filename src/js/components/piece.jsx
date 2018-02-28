import React from 'react';

export default class Piece extends React.Component {
  animate() {
    return this.props.shown ? 'fadein' : '';
  }

  render() {
    const color = '#E5E5C4';
    const cn    = this.animate();
    return <polygon
      className={cn}
      points={this.props.xy}
      fill={color}
      fillOpacity={this.props.opacity} />
  }
}
