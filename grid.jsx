import StickyColumns from './sticky-columns';
import StickyHeader from './sticky-header';
import StuckHeader from './stuck-header';
import Content from './content';
import React from 'react';
import styles from './grid.css';

export default class Grid extends React.Component {
  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      top: 0,
      left: 0
    };
  }

  handleScroll(top, left) {
    this.setState({ top, left });
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.row}>
          <StuckHeader />
          <StickyHeader left={this.state.left} />
        </div>
        <div className={styles.row}>
          <StickyColumns top={this.state.top} />
          <Content onScroll={this.handleScroll} />
        </div>
      </div>
    );
  }
}
