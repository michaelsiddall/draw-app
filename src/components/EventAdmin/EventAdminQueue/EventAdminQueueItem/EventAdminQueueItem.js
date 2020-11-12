import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';
import QueueComplete from "../QueueComplete/QueueComplete";

class EventAdminQueueItem extends Component {
  render() {
    console.log('EVENT ADMIN ITEM', this.props.item)
    return (
      <>
        <tr>
          <td>{this.props.item.table_number}</td>
          <td>{this.props.item.artist_count}</td>
          <td><QueueComplete
              
          /></td>
        </tr>
      </>
    );
  }
}

export default connect(mapStoreToProps)(EventAdminQueueItem);
