import StickyColumns from './sticky-columns';
import StickyHeader from './sticky-header';
import StuckHeader from './stuck-header';
import Content from './content';
import React from 'react';
import ReactDOM from 'react-dom';
import styles from './grid.css';

export default class Grid extends React.Component {
  handleScroll(top, left) {
    const header = ReactDOM.findDOMNode(this.refs.stickyHeader);
    header.scrollLeft = left;

    const column = ReactDOM.findDOMNode(this.refs.stickyColumn);
    column.scrollTop = top;
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.row}>
          <StuckHeader />
          <StickyHeader ref="stickyHeader" />
        </div>
        <div className={styles.row}>
          <StickyColumns ref="stickyColumn" />
          <Content onScroll={this.handleScroll.bind(this)} />
        </div>
      </div>
    );
  }
}
