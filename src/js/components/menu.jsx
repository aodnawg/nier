import React from 'react';
import Bg from './menu/bg';

export default class Menu extends React.Component {
  close_handler() {
    this.props.actions.menu_actions.close_menu();
  }

  render() {
    const menu_class = this.props.state.show_menu ? 'show' : 'hide';
    const contents_class = this.props.state.show_contents ? 'show' : 'hide';

    return (<div
      id="menu"
      className={menu_class}
    >
      <Bg
        state={this.props.state}
        actions={this.props.actions}
      />
      <div
        className={`content ${contents_class}`}
      >
        <p
          className="close"
          onClick={ () => { this.close_handler(); }}
          onKeyDown={this.handleKeyDown}
        >
          close
        </p>
      </div>
            </div>);
  }
}
