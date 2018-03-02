import React from 'react';
import Menu from './components/menu.jsx';

export default class App extends React.Component {
  hoge(e) {
    this.props.actions.show_menu();
    console.log(this.props);
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
