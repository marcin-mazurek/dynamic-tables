import './node_modules/react-virtualized/styles.css';
import './index.css';

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Grid, AutoSizer, ScrollSync } from 'react-virtualized';
import shallowCompare from 'react-addons-shallow-compare';
import scrollbarSize from 'dom-helpers/util/scrollbarSize';

class App extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      columnWidth: 200,
      columnsCount: 15,
      height: 800,
      overscanColumnsCount: 0,
      overscanRowsCount: 5,
      rowHeight: 100,
      rowsCount: 30
    };

    this._renderBodyCell = this._renderBodyCell.bind(this);
    this._renderHeaderCell = this._renderHeaderCell.bind(this);
    this._renderLeftSideCell = this._renderLeftSideCell.bind(this);
  }

  render () {
    const {
      columnsCount,
      columnWidth,
      height,
      overscanColumnsCount,
      overscanRowsCount,
      rowHeight,
      rowsCount
    } = this.state;

    return (
      <ScrollSync>
        {({ clientHeight, clientWidth, onScroll, scrollHeight, scrollLeft, scrollTop, scrollWidth }) => {
          const x = scrollLeft / (scrollWidth - clientWidth);
          const y = scrollTop / (scrollHeight - clientHeight);

          return (
            <div className="GridRow">
              <div
                className="LeftSideGridContainer"
                style={{
									color: 'white',
									backgroundColor: 'grey',
                  position: 'absolute',
                  left: 0,
                  top: 0,
									boxShadow: 'none'
                }}
              >
                <Grid
                  renderCell={this._renderLeftHeaderCell}
                  className="HeaderGrid"
                  width={columnWidth}
                  height={rowHeight}
                  rowHeight={rowHeight}
                  columnWidth={columnWidth}
                  rowsCount={1}
                  columnsCount={1}
                />
              </div>
              <div
                className="LeftSideGridContainer"
                style={{
									backgroundColor: 'white',
                  position: 'absolute',
                  left: 0,
                  top: rowHeight,
                }}>
                <Grid
                  overscanColumnsCount={overscanColumnsCount}
                  overscanRowsCount={overscanRowsCount}
                  renderCell={this._renderLeftSideCell}
                  columnWidth={columnWidth}
                  columnsCount={1}
                  className="LeftSideGrid"
                  height={height - scrollbarSize()}
                  rowHeight={rowHeight}
                  rowsCount={rowsCount}
                  scrollTop={scrollTop}
                  width={columnWidth}
                />
              </div>
              <div className="GridColumn">
                <AutoSizer disableHeight>
                  {({ width }) => (
                    <div>
                      <div style={{
                        backgroundColor: `grey`,
                        color: 'white',
                        height: rowHeight,
                        width: width - scrollbarSize()
                      }}>
                        <Grid
                          className="HeaderGrid"
                          columnWidth={columnWidth}
                          columnsCount={columnsCount}
                          height={rowHeight}
                          overscanColumnsCount={overscanColumnsCount}
                          renderCell={this._renderHeaderCell}
                          rowHeight={rowHeight}
                          rowsCount={1}
                          scrollLeft={scrollLeft}
                          width={width - scrollbarSize()}
                        />
                      </div>
                      <div
                        style={{
													backgroundColor: 'white',
                          height,
                          width
                        }}>
                        <Grid
                          className="BodyGrid"
                          columnWidth={columnWidth}
                          columnsCount={columnsCount}
                          height={height}
                          onScroll={onScroll}
                          overscanColumnsCount={overscanColumnsCount}
                          overscanRowsCount={overscanRowsCount}
                          renderCell={this._renderBodyCell}
                          rowHeight={rowHeight}
                          rowsCount={rowsCount}
                          width={width}
                        />
                      </div>
                    </div>
                  )}
                </AutoSizer>
              </div>
            </div>
          )
        }}
      </ScrollSync>
    );
  }

  shouldComponentUpdate (nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState)
  }

  _renderBodyCell ({ columnIndex, rowIndex }) {
    if (columnIndex < 1) {
      return
    }

    return this._renderLeftSideCell({ columnIndex, rowIndex })
  }

  _renderHeaderCell ({ columnIndex, rowIndex }) {
    if (columnIndex < 1) {
      return
    }

    return this._renderLeftHeaderCell({ columnIndex, rowIndex })
  }

  _renderLeftHeaderCell ({ columnIndex, rowIndex }) {
    return (
      <div className='headerCell'>
        {`C${columnIndex}`}
      </div>
    )
  }

  _renderLeftSideCell ({ columnIndex, rowIndex }) {
    const rowClass = rowIndex % 2 === 0
      ? columnIndex % 2 === 0 ? 'evenRow' : 'oddRow'
      : columnIndex % 2 !== 0 ? 'evenRow' : 'oddRow'
    const classNames = rowClass + ' ' + 'cell';

    return (
      <div className={classNames}>
        {`R${rowIndex}, C${columnIndex}`}
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
