import * as React from "react";

import * as styles from '../css/square.css';

export interface Props {
  value: any;
  onClick: () => void;
}

export function Square(props: Props) {
  return (
    <button className={styles.square} onClick={props.onClick}>
      {props.value}
    </button>
  );
}
