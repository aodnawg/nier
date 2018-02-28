import React from 'react';
import ReactDOM from 'react-dom';
import Arranger from './arranger';
import Piece from './components/piece.jsx'

import '../scss/fade.scss'

class ShoppingList extends React.Component {
  render() {
    const arranger = new Arranger(540, 540)
    const xys = arranger.call();

    return <div>
        <p>ほげほげ</p>
        <svg version="1.1" width="540" height="540"  xmlns="http://www.w3.org/2000/svg">
          { xys.map( (xy) => { return <Piece xy={xy} /> }) }
        </svg>
    </div>;
  }
}

class Rect extends React.Component {

  render() {
    this.arranger = new Arranger(540, 800)
    this.poss = this.arranger.call()

    const hoge = this.poss[0];
    console.log(hoge);
    console.log(this.props.hoge);

    return <polygon points={hoge} />
  }
}

ReactDOM.render(
  <ShoppingList />,
  document.getElementById('content')
);
