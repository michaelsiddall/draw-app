import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';
import QueueComplete from "../QueueConfirm/QueueComplete";
import QueueDelete from "../QueueConfirm/QueueDelete";

class EventAdminQueueItem extends Component {


  render() {
    console.log('EVENT ADMIN ITEM', this.props.item)
    return (
      <>
        <tr>
          <td>{this.props.item.table_number}</td>
          <td>{this.props.item.artist_count}</td>
          <td><QueueComplete
              tableNumber= {this.props.item.table_number}
              artistCount = {this.props.item.artist_count}
              item={this.props.item}
          /></td>
          <td><QueueDelete
              tableNumber= {this.props.item.table_number}
              artistCount = {this.props.item.artist_count}
              item={this.props.item}
          />
          </td>
        </tr>
      </>
    );
  }
}

export default connect(mapStoreToProps)(EventAdminQueueItem);
