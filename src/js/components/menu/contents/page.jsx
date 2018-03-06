import React from 'react';
import SubNav from './page/sub_nav';

export default class Page extends React.Component { // TODO propsが適当すぎる
  render() {
    const { page } = this.props;

    return (<div className="page">
      <h1 className="page_title">{page.name}</h1>
      <div className="page_box">
        <nav className="sub_nav">
          <ul>
            {page.sub_contents.map((n, i) =>
              (<SubNav
                key={i}
                params={n}
                changeSubContents={this.props.actions.page_actions.change_sub_contents}
                subContentsIndex={i}
                pageIndex={this.props.contents.current_page_index}
                page={page}
              />))}
          </ul>
        </nav>
        <div className="text">
          {page.sub_contents[this.props.currentSubContents].text}
        </div>
      </div>

            </div>
    );
  }
}
