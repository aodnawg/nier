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
    const { current_page } = this.props.contents;

    const page = pages.filter(p => p.name === current_page)[0];
    const { current_sub_contents } = page;

    const current_page_index = pages.map(v => v.name).indexOf(page.name);

    return (<div
      className={`contents ${contents_class}`}
    >
      <Header
        showNav={this.props.state.show_nav}
        actions={this.props.actions}
        contents={this.props.contents}
        pages={this.props.pages}
      />

      <div className="border_line" />

      <Page
        currentPage={current_page}
        currentPageIndex={current_page_index}
        currentSubContents={current_sub_contents}
        page={page}
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

Contents.propTypes = {

}
