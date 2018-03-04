import React from 'react';

export default class Page extends React.Component {
  render() {
    const { page } = this.props;

    return (<div className="page">
      <h1 className="page_title">{page.name}</h1>
      <div className="page_box">
        <nav className="sub_nav">
          <ul>
            {page.sub_contents.map(n => <li>{n.name}</li>)}
          </ul>
        </nav>
        <div className="text">
          {page.sub_contents[0].text}
        </div>
      </div>

            </div>
    );
  }
}
