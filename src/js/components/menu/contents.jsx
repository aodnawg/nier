import React from 'react';
import Header from './contents/header';
import Page from '../../containers/page';

export default class Contents extends React.Component {
  close_handler() {
    this.props.actions.menu_actions.close_menu();
  }

  render() {
    const contents_class = this.props.state.show_contents ? 'show' : 'hide';
    const { pages } = this.props;
    const { current_page_index } = this.props.contents;
    const page = pages[current_page_index];
    const { current_sub_contents } = page;

    return (<div
      className={`contents ${contents_class}`}
    >
      <Header
        showNav={this.props.state.show_nav}
        actions={this.props.actions}
        pages={this.props.pages}
        currentPageIndex={current_page_index}
      />

      <div className="border_line" />

      <Page
        currentPageIndex={current_page_index}
        currentSubContents={current_sub_contents}
        page={page}
        showSubNav={this.props.showSubNav}
      />

      <button
        className="close"
        onClick={() => { this.close_handler(); }}
        onKeyDown={this.handleKeyDown}
      >
        close
      </button>

      <div className="border_line bottom" />
            </div>);
  }
}
