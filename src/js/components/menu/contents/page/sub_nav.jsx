import React from 'react';

export default class SubNav extends React.Component {
  click_handler() {
    const { subContentsIndex, pageIndex } = this.props;
    this.props.changeSubContents(pageIndex, subContentsIndex);
  }

  render() {
    const { subContentsIndex, page } = this.props;
    const currentSubContentsIndex = page.current_sub_contents;
    const selected = (subContentsIndex === currentSubContentsIndex) ? 'selected' : '';
    const transitionDelay = `${ this.props.delay }ms`;

    return (<li
              className={selected}
              style={{ transitionDelay }}
            >
              <div className="line_top" />
              <div
                className="button"
                onClick={() => { this.click_handler(); }}
              >
                {this.props.params.name}
              </div>
              <div className="line_bottom" />
            </li>);
  }
}
