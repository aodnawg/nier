export default class Arranger {
  constructor(width, height, row_qty = 9) {
    this.width = width;
    this.height = height;
    this.row_qty = row_qty;
    this.piece_size = this.piece_size();
  }

  call() {
    return {
      pieces: this.piece_xys(),
      grid: this.grid(),
      size: this.piece_size,
    };
  }

  svg_params() {
    return this.call();
  }

  piece_size() {
    return this.height / this.row_qty; // 割り切れない可能性を考える
  }

  grid() {
    const { piece_size } = this;
    const column_qty = Math.ceil(this.width / piece_size) + 1;
    const grid_cascade = [...Array(column_qty).keys(0)]
      .map(x => [...Array(this.row_qty).keys(0)]
        .map(y => [x, y].map(_ => _ * piece_size)));
    const grid = grid_cascade.concat.apply([], grid_cascade);
    return grid;
  }

  piece_xy(vertex, index, height = this.piece_size) {
    if (index % 2 === 0) {
      const base_left = [vertex[0] - height, vertex[1] + height];
      const base_right = [vertex[0] + height, vertex[1] + height];
      const pos = [vertex, base_left, base_right];
      return pos.join(' ');
    }
    const vertex_inverted = [vertex[0], vertex[1] + height];
    const base_left = [vertex[0] - height, vertex[1]];
    const base_right = [vertex[0] + height, vertex[1]];
    const pos = [vertex_inverted, base_left, base_right];
    return pos.join(' ');
  }

  piece_xys() {
    const grid = this.grid();
    const xys = grid.map((v, i) => ({
      key: i,
      xy: this.piece_xy(v, i),
      animation_state: 0, // 0 未, 1 途中, 2 完了
    }));
    return xys;
  }
}
