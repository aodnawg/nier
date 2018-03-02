import React from 'react';
import Menu from './components/menu';

export default class App extends React.Component {
  hoge() {
    this.props.actions.menu_actions.show_menu();
  }

  render() {
    return (<div>
      <div id="main">
        <p className="trigger" onClick={() => { this.hoge(); }}>open</p>
      </div>
      <Menu state={this.props.state} actions={this.props.actions} />
            </div>);
  }
}
