import React from 'react';
import Menu from './containers/menu';

export default class App extends React.Component {
  click_handler() {
    this.props.actions.menu_actions.show_menu();
  }

  render() {
    return (<div>
      <div id="main">
        <p
          className="trigger"
          onClick={() => { this.click_handler(); }}
          onKeyDown={this.handleKeyDown}
        >
          open
        </p>
      </div>
      <Menu />
            </div>);
  }
}
