import React from 'react';
import styles from './stuck-header.css';
import Column from './column';
import { times } from 'lodash';

const cols = 2;

export default class StickyHeader extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        {times(cols, colNumber => <Column key={colNumber}>StuckHeader</Column>)}
      </div>
    );
  }
}
