import React from 'react';
import SubNav from './page/sub_nav';
import Selector from '../../common/selector';
import Tips from './page/tips';

export default class Page extends React.Component { // TODO propsが適当すぎる
  render() {
    const { page } = this.props;
    const delay = 80;
    const show_suv_nav_cn = this.props.showSubNav ? 'show' : 'hide';
    const suv_nav_cn = `sub_nav ${show_suv_nav_cn}`;

    return (<div className="page">
      <h1 className="page_title">{page.title}</h1>
      <div className="page_box">
        <nav className={suv_nav_cn}>
          <ul>
            {page.sub_contents.map((n, i) =>
              (<SubNav
                key={i}
                params={n}
                changeSubContents={this.props.actions.page_actions.change_sub_contents}
                subContentsIndex={i}
                pageIndex={this.props.contents.current_page_index}
                page={page}
                delay={delay * (i - 1)}
              />))}
            <Selector direction="y" index={this.props.currentSubContents} />
          </ul>
        </nav>

        <div className="text">
          {page.sub_contents[this.props.currentSubContents].text}
        </div>
      </div>

      <Tips text={page.tips} />
            </div>
    );
  }
}
