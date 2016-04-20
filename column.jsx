import React from 'react';
import styles from './column.css';

export default class Column extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <div className={styles.column}>&lt;{this.props.children} /&gt;</div>;
  }
}
