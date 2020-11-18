import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';
import RequestComplete from "../RequestConfirm/RequestComplete";
import RequestDelete from "../RequestConfirm/RequestDelete";
import "./RequestItem.css"

class RequestItem extends Component {


  render() {
    let t = new Date (this.props.item.timestamp)
    let time = t.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    return (
      <>
        
        <tr id="all-requests-tr">
          <td>{this.props.item.location}</td>
          <td>{this.props.item.timestamp.split('T')[0]}</td>
          <td>{time}</td>
          <td>{this.props.item.table_number}</td>
          <td>{this.props.item.artist_count}</td>
          <td><RequestComplete
              tableNumber= {this.props.item.table_number}
              artistCount = {this.props.item.artist_count}
              item={this.props.item}
          /></td>
          <td><RequestDelete
              tableNumber= {this.props.item.table_number}
              artistCount = {this.props.item.artist_count}
              item={this.props.item}
          /></td>
        </tr>
      </>
    );
  }
}

export default connect(mapStoreToProps)(RequestItem);
