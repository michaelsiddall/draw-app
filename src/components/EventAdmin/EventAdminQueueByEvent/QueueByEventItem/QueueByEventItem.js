import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';


class QueueByEventItem extends Component {


  render() {
    console.log('QueueItem', this.props.item)
    return (
      <>
        <tr>
          <td>{this.props.item.table_number}</td>
          <td>{this.props.item.artist_count}</td>
          <td>COMPLETE</td>
          <td>DELETE</td>
        </tr>
      </>
    );
  }
}

export default connect(mapStoreToProps)(QueueByEventItem);