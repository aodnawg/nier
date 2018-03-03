import React from 'react';

export default class Contents extends React.Component {
  close_handler() {
    this.props.actions.menu_actions.close_menu();
  }

  make_delay_time() {
    const { pieces, showBgDuration } = this.props;
    return [...Array(pieces.length).keys()]
      .map(v => Math.floor((v / pieces.length) * showBgDuration))
      .sort(() => Math.random() - 0.5);
  }

  render() {
    const contents_class = this.props.state.show_contents ? 'show' : 'hide';
    const nav_class = this.props.state.show_nav ? 'show' : 'hide';

    return (<div
      className={`contents ${contents_class}`}
    >
      <div className="header">
        <nav>
          <ul>
            <li style={{ transitionDelay: '100ms' }} className={nav_class}>MAP</li>
            <li style={{ transitionDelay: '200ms' }} className={nav_class}>QUEST</li>
            <li style={{ transitionDelay: '300ms' }} className={nav_class}>ITEM</li>
            <li style={{ transitionDelay: '400ms' }} className={nav_class}>WEAPON</li>
            <li style={{ transitionDelay: '500ms' }} className={nav_class}>SKILL</li>
            <li style={{ transitionDelay: '600ms' }} className={nav_class}>DATA</li>
            <li style={{ transitionDelay: '700ms' }} className={nav_class}>SYSTEM</li>
          </ul>
        </nav>
      </div>
      <div className="main">
        <p
          className="close"
          onClick={() => { this.close_handler(); }}
          onKeyDown={this.handleKeyDown}
        >
          close
        </p>
      </div>
            </div>);
  }
}
