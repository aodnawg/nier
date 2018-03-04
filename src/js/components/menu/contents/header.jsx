import React from 'react';
import Button from './header/nav/button';

export default class Header extends React.Component {
  render() {
    const nav_class = this.props.showNav ? 'show' : 'hide';
    const buttons = this.props.pages.map(p => p.name);

    return (<div className="header">
      <nav className={nav_class}>
        <ul>
          {buttons.map((b, index) => (<Button
            key={index}
            value={b}
            delay={50 * index}
            actions={this.props.actions}
            currentPage={this.props.contents.current_page}
          />))}
        </ul>
      </nav>
            </div>
    );
  }
}
