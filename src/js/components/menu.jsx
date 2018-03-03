import React from 'react';
import Bg from './menu/bg';

export default class Menu extends React.Component {
  hoge() {
    this.props.actions.menu_actions.hide_menu();
  }

  render() {
    const menu_class = this.props.state.show_menu ? 'show' : 'hide';

    return (<div
      id="menu"
      className={menu_class}
    >
      <Bg state={this.props.state} actions={this.props.actions} />
      <div className="content">
        <p
          className="close"
          onClick={() => { this.hoge(); }}
          onKeyDown={this.handleKeyDown}
        >
          close
        </p>
      </div>
            </div>);
  }
}
