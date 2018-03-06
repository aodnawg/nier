import React from 'react';
import Button from './header/nav/button';

export default class Header extends React.Component {
  render() {
    const nav_class = this.props.showNav ? 'show' : 'hide';
    const { pages } = this.props;

    return (<div className="header">
      <nav className={nav_class}>
        <ul>
          {pages.map((p, index) => (<Button
            key={index}
            value={p.name}
            delay={50 * index}
            actions={this.props.actions.contents_actions}
            thisIndex={index}
            currentPageIndex={this.props.currentPageIndex}
          />))}
        </ul>
      </nav>
            </div>
    );
  }
}
