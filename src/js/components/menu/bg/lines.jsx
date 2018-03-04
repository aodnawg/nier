import React from 'react';

export default class Lines extends React.Component { // TODO: ひどいコード
  render() {
    const { arranger } = this.props;
    if (!arranger) { return (<g />); }

    const { grid, size } = arranger;
    const grid_r = grid.slice().reverse();
    const cn = `lines ${this.props.showLines ? 'show' : 'hide'}`;

    return (<g className={cn}>
      <line
        x1={grid[0][0]}
        y1={grid[0][1]}
        x2={grid[80][0] + size}
        y2={grid[80][1] + size}
        stroke="#ffffff"
      />

      <line
        x1={grid[0][0] + (size * 2)}
        y1={grid[0][1]}
        x2={grid[80][0] + (size * 3)}
        y2={grid[80][1] + size}
        stroke="#ffffff"
      />

      <line
        x2={grid[81][0]}
        y2={grid[81][1]}
        x1={grid[8][0]}
        y1={grid[8][1] + size}
        stroke="#ffffff"
      />

      <line
        x1={grid_r[0][0]}
        y1={grid_r[0][1] + size}
        x2={grid_r[80][0] - size}
        y2={grid_r[80][1]}
        stroke="#ffffff"
      />

      <line
        x1={grid_r[8][0]}
        y1={grid_r[8][1]}
        x2={grid_r[81][0]}
        y2={grid_r[81][1] + size}
        stroke="#ffffff"
      />

      <line
        x1={grid_r[8][0] - (size * 2)}
        y1={grid_r[8][1]}
        x2={grid_r[81][0] - (size * 2)}
        y2={grid_r[81][1] + size}
        stroke="#ffffff"
      />

      <line
        x1={grid[1][0]}
        y1={grid[1][1]}
        x2={grid_r[7][0]}
        y2={grid_r[7][1]}
        stroke="#ffffff"
      />

      <line
        x1={grid[8][0]}
        y1={grid[8][1]}
        x2={grid_r[0][0]}
        y2={grid_r[0][1]}
        stroke="#ffffff"
      />
            </g>);
  }
}
