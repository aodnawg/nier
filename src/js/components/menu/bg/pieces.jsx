import React from 'react';
import Piece from './piece';

export default class Pieces extends React.Component {
  render() {
    return <g filter="url(#polycleaner)"
      className='pieces'>
      { this.props.pieces.map( (p, i) => {
        return <Piece key={i}
          xy={p.xy}
          shown={this.props.shown} /> }) }
    </g>
  }
}
