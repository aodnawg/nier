import React from 'react';

export default class Button extends React.Component {
  click_handler() {
    this.props.changeContents(this.props.thisIndex);
  }

  render() {
    const { thisIndex, currentPageIndex } = this.props;
    const transitionDelay = `${this.props.delay}ms`;
    const selected = (thisIndex === currentPageIndex) ? 'selected' : '';

    return (<li
      style={{ transitionDelay }}
      onClick={() => { this.click_handler(); }}
      className={selected}
    >
              <div className="line_top" />
              <div className="button">{this.props.value}</div>
              <div className="line_bottom" />
            </li>);
  }
}
