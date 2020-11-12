import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';
import RequestComplete from "../RequestConfirm/RequestComplete";
import RequestDelete from "../RequestConfirm/RequestDelete";

class RequestItem extends Component {


  render() {
    console.log('EVENT ADMIN ITEM', this.props.item)
    return (
      <>
        <tr>
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
          />
          </td>
        </tr>
      </>
    );
  }
}

export default connect(mapStoreToProps)(RequestItem);
