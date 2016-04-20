import React from 'react';
import Column from './column';
import styles from './row.css';
import { times } from 'lodash';

const cols = 30;

export default function Row() {
  return (
    <div className={styles.container}>
      {times(cols, colNumber => <Column key={colNumber}>Content</Column>)}
    </div>
  );
}
