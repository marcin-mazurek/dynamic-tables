import React from 'react';
import styles from './stuck-header.css';
import Column from './column';
import { times } from 'lodash';

const cols = 2;

export default class StickyHeader extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.left !== nextProps.left;
  }

  render() {
    return (
      <div className={styles.container}>
        {times(cols, colNumber => <Column key={colNumber}>StuckHeader</Column>)}
      </div>
    );
  }
}
