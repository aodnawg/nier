import React from 'react';

export default class Piece extends React.Component {
  render() {
    const color = '#E5E5C4';
    return <polygon
      className={'hoge'}
      points={this.props.xy}
      fill={color}
      fillOpacity={ Math.floor(Math.random() * 101) / 100 } />
  }
}
