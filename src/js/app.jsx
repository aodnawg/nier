import React from 'react';
import Menu from './components/menu';

export default class App extends React.Component {
  click_handler() {
    this.props.actions.menu_actions.hoge();
  }

  render() {
    return (<div>
      <div id="main">
        <button
          className="trigger"
          onClick={() => { this.click_handler(); }}
          onKeyDown={this.handleKeyDown}
        >
          open
        </button>
      </div>
      <Menu state={this.props.state} actions={this.props.actions} />
            </div>);
  }
}
