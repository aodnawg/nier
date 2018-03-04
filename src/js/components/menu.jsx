import React from 'react';
import Bg from './menu/bg';
import Contents from './menu/contents';

export default class Menu extends React.Component {
  close_handler() {
    this.props.actions.menu_actions.close_menu();
  }

  render() {
    const menu_class = this.props.state.show_menu ? 'show' : 'hide';

    return (<div
      id="menu"
      className={menu_class}
    >
      <Bg
        state={this.props.state}
        actions={this.props.actions}
      />
      <Contents
        state={this.props.state}
        actions={this.props.actions}
        contents={this.props.contents}
        pages={this.props.pages}
      />
            </div>);
  }
}
