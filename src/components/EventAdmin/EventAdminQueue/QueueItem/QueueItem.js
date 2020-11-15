import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';
import QueueComplete from "../QueueConfirm/QueueComplete";
import QueueDelete from "../QueueConfirm/QueueDelete";

class QueueItem extends Component {

  render() {
    return (
      <>
        <tr>
          <td>{this.props.item.table_number}</td>
          <td>{this.props.item.artist_count}</td>
          <td><QueueComplete
              tableNumber= {this.props.item.table_number}
              artistCount = {this.props.item.artist_count}
              item={this.props.item}
              eventID = {this.props.eventID}
          /></td>
          <td><QueueDelete
              tableNumber= {this.props.item.table_number}
              artistCount = {this.props.item.artist_count}
              item={this.props.item}
              eventID = {this.props.eventID}
          /></td>
        </tr>
      </>
    );

  }
}

export default connect(mapStoreToProps)(QueueItem);
