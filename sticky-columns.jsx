import styles from './sticky-columns.css';
import Column from './column';
import { times } from 'lodash';
import React from 'react';

const rows = 48;
const cols = 2;

export default class StickyColumns extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          { times(rows * cols, colNumber => <Column key={colNumber}>StickyColumns</Column>) }
        </div>
      </div>
    );
  }
}
