import React from 'react';
import Piece from './components/piece.jsx'

export default class App extends React.Component {
  render() {
    return <div>
        <svg version="1.1"
          width={this.props.state.window_width}
          height={this.props.state.window_height}
          xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="polycleaner" color-interpolation-filters="sRGB">
              <feComponentTransfer>
                <feFuncA type="table" tableValues="0 0.5 1 1" />
              </feComponentTransfer>
            </filter>
          </defs>
          <g filter="url(#polycleaner)">
            { this.props.state.pieces.map( (p) => {
              return <Piece xy={p.xy} shown={p.shown} opacity={p.opacity} /> }) }
          </g>
        </svg>
    </div>;
  }
}
