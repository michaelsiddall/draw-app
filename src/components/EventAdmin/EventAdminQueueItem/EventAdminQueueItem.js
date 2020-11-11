import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

class EventAdminQueueItem extends Component {
  render() {
    return (
      <>
        <tr>
          <td>{this.props.item.tableNumber}</td>
          <td>{this.props.item.artistNumber}</td>
        </tr>
      </>
    );
  }
}

export default connect(mapStoreToProps)(EventAdminQueueItem);
