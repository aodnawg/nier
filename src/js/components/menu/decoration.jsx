import React from 'react';

function PartsL(props) {
  return (<g>
    <circle
      x="0"
      cy="0"
      r="580"
      fill="none"
      stroke="#ACA996"
      strokeWidth={1}
      className="inner_circle"
    />

    <circle
      x="0"
      cy="0"
      r="600"
      fill="none"
      stroke="#ACA996"
      strokeWidth={1}
    />

  <g className="lines">
    <line
      stroke="#ACA996"
      strokeWidth={1}
      x1="0"
      y1="0"
      x2={props.state.window_height}
      y2={props.state.window_height}
    />

    <line
      stroke="#ACA996"
      strokeWidth={1}
      x1="60"
      y1="0"
      x2={props.state.window_height + 60}
      y2={props.state.window_height}
    />

    <line
      stroke="#ACA996"
      strokeWidth={1}
      x1="-60"
      y1="0"
      x2={props.state.window_height - 60}
      y2={props.state.window_height}
    />
  </g>
          </g>
  );
}

function PartsR(props) {
  return (<g>
    <circle
      cx={props.state.window_width}
      cy={props.state.window_height}
      r="580"
      fill="none"
      stroke="#ACA996"
      strokeWidth={1}
    />

    <circle
      cx={props.state.window_width}
      cy={props.state.window_height}
      r="600"
      fill="none"
      stroke="#ACA996"
      strokeWidth={1}
    />

    <line
      stroke="#ACA996"
      strokeWidth={1}
      x1={props.state.window_width - props.state.window_height}
      y1="0"
      x2={props.state.window_width}
      y2={props.state.window_height}
    />

    <line
      stroke="#ACA996"
      strokeWidth={1}
      x1={props.state.window_width - props.state.window_height - 60}
      y1="0"
      x2={props.state.window_width - 60}
      y2={props.state.window_height}
    />

    <line
      stroke="#ACA996"
      strokeWidth={1}
      x1={props.state.window_width - props.state.window_height + 60}
      y1="0"
      x2={props.state.window_width + 60}
      y2={props.state.window_height}
    />
          </g>
  );
}

export default class Decoration extends React.Component {
  render() {
    const show_class = this.props.show ? 'show' : 'hide';
    const cn = `decoration ${show_class}`;

    return (<div className={cn}>
        <svg
          version="1.1"
          width={this.props.state.window_width}
          height={this.props.state.window_height}
          xmlns="http://www.w3.org/2000/svg"
        >
          <PartsL state={this.props.state} />
          <PartsR state={this.props.state} />
        </svg>
            </div>);
  }
}
