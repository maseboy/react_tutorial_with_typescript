import * as React from 'react';
import { Board } from './Board';

import * as styles from '../css/game.css';

export class Game extends React.Component {
  render() {
    return (
      <div className={styles.game}>
        <div className="game-board">
          <Board />
        </div>
        <div className={styles.gameInfo}>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
