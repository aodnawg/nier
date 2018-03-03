import React from 'react';
import Header from './contents/header';

export default class Contents extends React.Component {
  close_handler() {
    this.props.actions.menu_actions.close_menu();
  }

  render() {
    const contents_class = this.props.state.show_contents ? 'show' : 'hide';

    return (<div
      className={`contents ${contents_class}`}
    >
      <Header
        showNav={this.props.state.show_nav}
        actions={this.props.actions}
        contents={this.props.contents}
      />
      <div className="main">
        <h1>{this.props.contents.current_page}</h1>
        <p
          className="close"
          onClick={() => { this.close_handler(); }}
          onKeyDown={this.handleKeyDown}
        >
          close
        </p>
      </div>
            </div>);
  }
}
