import React from 'react';
import Piece from './piece';

export default class Pieces extends React.Component {
  make_delay_time() {
    const max_ms = 1000;
    const { pieces } = this.props;
    return [...Array(pieces.length).keys()]
      .map(v => Math.floor((v / pieces.length) * max_ms))
      .sort(() => Math.random() - 0.5);
  }

  render() {
    const delay_times = this.make_delay_time();


    return (<g
      filter="url(#polycleaner)"
      className="pieces"
    >
      { this.props.pieces.map((p) => {
        const delay_time = delay_times[p.key];
        const is_delay_time_max = delay_time === Math.max(...delay_times);
        const is_delay_time_min = delay_time === Math.min(...delay_times);

        return (<Piece
          actions={this.props.actions}
          key={p.key}
          index={p.key}
          delayTime={delay_time}
          animationState={p.animation_state}
          isDelayTimeMax={is_delay_time_max}
          isDelayTimeMin={is_delay_time_min}
          xy={p.xy}
          shown={this.props.shown}
        />);
      }) }
            </g>);
  }
}
