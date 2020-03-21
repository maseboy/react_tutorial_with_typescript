import * as React from "react";
import { Square } from "./Square";

import * as styles from '../css/board.css';

type SquareType = 'O' | 'X' | null;

export interface Props {
  squares: SquareType[];
  onClick: (i: number) => void;
}

export class Board extends React.Component<Props, {}> {
  renderSquare(i: number) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className={styles.boardRow}>
          {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
        </div>
        <div className={styles.boardRow}>
          {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)}
        </div>
        <div className={styles.boardRow}>
          {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
