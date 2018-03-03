import React from 'react';
import Menu from './components/menu';

export default class App extends React.Component {
  click_handler() {
    this.props.actions.menu_actions.hoge();
    console.log(10)
  }

  render() {
    return (<div>
      <div id="main">
        <p className="trigger" onClick={() => { this.click_handler(); }}>open</p>
      </div>
      <Menu state={this.props.state} actions={this.props.actions} />
            </div>);
  }
}
