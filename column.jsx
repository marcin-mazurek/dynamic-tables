import React from 'react';
import styles from './column.css';

export default class Column extends React.Component {
  render() {
    return <div className={styles.column}>&lt;{this.props.children} /&gt;</div>;
  }
}
