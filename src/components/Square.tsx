import * as React from "react";

import * as styles from '../css/square.css';

type SquareType = string | null;

export interface Props {
  value: SquareType;
  onClick: () => void;
}

export function Square(props: Props) {
  return (
    <button className={styles.square} onClick={props.onClick}>
      {props.value}
    </button>
  );
}
