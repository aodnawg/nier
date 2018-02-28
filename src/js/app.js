import React from 'react';
import Arranger from './arranger';
import Piece from './components/piece.jsx'

export default class App extends React.Component {
  render() {
    const arranger = new Arranger(this.props.state.window_width, this.props.state.window_height)
    const xys = arranger.call();

    return <div>
        <svg version="1.1"
          width={this.props.state.window_width}
          height={this.props.state.window_height}
          xmlns="http://www.w3.org/2000/svg">
          { xys.map( (xy) => { return <Piece xy={xy} /> }) }
        </svg>
    </div>;
  }
}
