import * as React from "react";

import * as styles from '../css/square.css';

export interface Props {
  value: any;
  onClick: () => void;
  isHighlighted: boolean;
}

export function Square(props: Props) {
  let className = styles.square;
  if (props.isHighlighted) {
    className = `${styles.square} ${styles.highlighted}`;
  }
  return (
    <button className={className} onClick={props.onClick}>
      {props.value}
    </button>
  );
}
