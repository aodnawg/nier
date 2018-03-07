import React from 'react';

export default class Selector extends React.Component {
  render() {
    const { direction } = this.props;
    let position;
    if (direction === 'y') {
      position = { top: 6 + (52 * this.props.index) };
    } else {
      position = { left: `${( (90/7) * this.props.index) - 3.5}vw` };
    }

    console.log(position);

    return (<svg
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      style={Object.assign({
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeMiterlimit: 1.5,
      }, {}, position)}
      className="selector"
    >
      <g transform="matrix(1.38889,0,0,1.38889,-13.8889,-40.2778)">
          <rect x="72" y="29" width="10" height="10" />
          <path
            d="M31,39L79,56L31,73L10,56L31,39ZM31.25,59.25C29.456,61.044 26.544,61.044 24.75,59.25C22.956,57.456 22.956,54.544 24.75,52.75C26.544,50.956 29.456,50.956 31.25,52.75C33.044,54.544 33.044,57.456 31.25,59.25Z"
            style={{
              strokeWidth: '0',
            }}
          />
          <g transform="matrix(1,0,0,-1,0,112)">
              <rect x="72" y="29" width="10" height="10" />
          </g>
      </g>
            </svg>);
  }
}
