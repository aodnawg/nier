import React from 'react';
import Bg from './menu/bg';
import Contents from './menu/contents';
import Overlay from './menu/overlay';
import Decoration from './menu/decoration';

export default class Menu extends React.Component { // this.props.state に依存しないように書く
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
      <Decoration
        actions={this.props.actions}
        state={this.props.state}
        show={this.props.state.show_nav}
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
