import React from 'react';
import Bg from './menu/bg.jsx'

export default class Menu extends React.Component {
  hoge() {
    this.props.actions.hide_menu();
    console.log(this.props)
  }

  render() {
    const menu_class = this.props.state.show_menu ? 'show' : 'hide';

    return <div id="menu"
      className={menu_class} >
      <Bg state={this.props.state}/>
      <div className="content">
        <p className="close" onClick={() => {this.hoge();}}>close</p>
      </div>
    </div>
  }
}
