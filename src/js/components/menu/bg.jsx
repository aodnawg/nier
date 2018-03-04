import React from 'react';

import Filter from './bg/filter';
import Pieces from './bg/pieces';
import Lines from './bg/lines';

export default class Bg extends React.Component {
  render() {
    return (<div className="bg">
      <svg
        version="1.1"
        width={this.props.state.window_width}
        height={this.props.state.window_height}
        xmlns="http://www.w3.org/2000/svg"
      >

        <Filter />
        <Lines
          grid={this.props.state.grid}
          arranger={this.props.state.arranger}
          showLines={this.props.state.show_lines}
          showBgDuration={this.props.state.show_bg_duration}
        />
        <Pieces
          pieces={this.props.state.pieces}
          actions={this.props.actions}
          shown={this.props.state.show_bg}
          showBgDuration={this.props.state.show_bg_duration}
        />
      </svg>
            </div>);
  }
}
