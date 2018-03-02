import React from 'react';
import Filter from './bg/filter.jsx'
import Pieces from './bg/pieces.jsx'

export default class Bg extends React.Component {
  render() {
    return <div className="bg">
      <svg version="1.1"
        width={this.props.state.window_width}
        height={this.props.state.window_height}
        xmlns="http://www.w3.org/2000/svg">

        <Filter />
        <Pieces pieces={this.props.state.pieces}
          shown={this.props.state.show_menu} />
      </svg>
    </div>
  }
}
