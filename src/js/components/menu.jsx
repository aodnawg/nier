import React from 'react';
import Bg from './menu/bg';
import Contents from './menu/contents';
import Overlay from './menu/overlay';

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
        showSubNav={this.props.state.show_sub_nav}
      />
      <Overlay />
            </div>);
  }
}
