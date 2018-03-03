import React from 'react';
import Filter from './bg/filter'
import Pieces from './bg/pieces'

export default class Bg extends React.Component {
  render() {
    return <div className="bg">
      <svg version="1.1"
        width={this.props.state.window_width}
        height={this.props.state.window_height}
        xmlns="http://www.w3.org/2000/svg">

        <Filter />
        <Pieces pieces={this.props.state.pieces}
          actions={this.props.actions}
          shown={this.props.state.show_menu} />
      </svg>
    </div>
  }
}
