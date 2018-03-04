import React from 'react';

export default class SubNav extends React.Component {
  click_handler() {
    const { pageIndex, subContentsIndex } = this.props;
    this.props.changeSubContents(pageIndex, subContentsIndex);
  }

  render() {
    const { subContentsIndex, pages, pageIndex } = this.props;
    const currentSubContents = pages[pageIndex].current_sub_contents;
    const selected = (subContentsIndex === currentSubContents) ? 'selected' : '';

    return (<li className={selected}>
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
