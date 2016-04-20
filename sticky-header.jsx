import React from 'react';
import styles from './sticky-header.css';
import Column from './column';
import { times } from 'lodash';

const cols = 30;

export default class StickyHeader extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.left !== nextProps.left;
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          {times(cols, colNumber => <Column key={colNumber}>StickyHeader</Column>)}
        </div>
      </div>
    );
  }
}
