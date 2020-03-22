import * as React from "react";
import { Square } from "./Square";

import * as styles from '../css/board.css';

type SquareType = 'O' | 'X' | null;

export interface Props {
  squares: SquareType[];
  onClick: (i: number) => void;
  winLine: number[] | null;
}

export class Board extends React.Component<Props, {}> {
  renderSquare(i: number, isHighlighted: boolean) {
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        isHighlighted={isHighlighted}
      />
    );
  }

  render() {
    // https://qiita.com/yumarule/items/229b3ba1a607affb738b #3
    const rows = Array(3);
    for (let i of [0, 1, 2]) {
      const items = Array(3);
      for (let j of [0, 1, 2]) {
        const index = i*3 + j;
        const highlight = this.props.winLine && this.props.winLine.indexOf(index) !== -1
        items[j] = this.renderSquare(index, highlight);
      }
      rows[i] = (
        <div key={i} className={styles.boardRow}>
          {items}
        </div>
      );
    }

    return (
      <React.Fragment>
        {rows}
      </React.Fragment>
    );
  }
}
