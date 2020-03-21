import * as React from 'react';
import { Board } from './Board';

import * as styles from '../css/game.css';

type SquareType = 'O' | 'X' | null;

interface HistoryData {
  squares: SquareType[];
  selected: number;
}

interface States {
  history: HistoryData[];
  xIsNext: boolean;
  stepNumber: number;
}

export class Game extends React.Component<{}, States> {
  constructor(props: any) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        selected: null
      }],
      xIsNext: true,
      stepNumber: 0
    };
  }

  handleClick(i: number) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    // ゲームの決着が既についている or クリックされたマスが既に埋まっている
    if (this.calculateWinner(squares) || squares[i]) {return;}

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
        selected: i
      }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length
    });
  }

  jumpTo(step: number) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    })
  }

  calculateWinner(squares: SquareType[]) {
    const lines = [
      [0, 1, 2], //横
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6], //縦
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8], //斜め
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = this.calculateWinner(current.squares);
    // moveはindexの値が入る
    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move + ' (' + (step.selected % 3 + 1) + ', ' + (Math.floor(step.selected/3) + 1) + ')' :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className={styles.game}>
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i: number) => this.handleClick(i)}
            />
        </div>
        <div className={styles.gameInfo}>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}
