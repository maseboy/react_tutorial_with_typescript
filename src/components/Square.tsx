import * as React from "react";

import * as styles from '../css/square.css';

export interface SquareProps { value: number; }

export class Square extends React.Component<SquareProps, {}> {
  render() {
    return (
      <button className={styles.square}>
        {this.props.value}
      </button>
    );
  }
}
