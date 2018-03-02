import Arranger from '../src/js/arranger';
import { expect } from 'chai';

const width = 100;
const height = 90;

const hoge = new Arranger(width, height);

hoge.piece_xys();

expect(hoge.row_qty).to.eq(9);
expect(hoge.height).to.eq(height);
// expect(hoge.grid()).to.eq(0)

// console.log(hoge)

describe('', () => {
  it('', () => {
    console.log(hoge.call());
    expect(hoge.piece_size).to.eq(10);
  });
});
