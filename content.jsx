import styles from './content.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Row from './row';
import { times } from 'lodash';

const rows = 48;

export default class Content extends React.Component {
  componentDidMount() {
    const rootDomNode = ReactDOM.findDOMNode(this);

    rootDomNode.addEventListener('scroll', event => {
      this.props.onScroll(event.target.scrollTop, event.target.scrollLeft);
    });
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className={styles.container}>
        {times(rows, rowNumber => <Row key={rowNumber} />)}
      </div>
    );
  }
}
