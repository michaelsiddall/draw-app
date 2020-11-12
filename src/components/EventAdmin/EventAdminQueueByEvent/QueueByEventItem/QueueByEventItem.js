import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';


class QueueByEventItem extends Component {

  render() {
    return (
      <>
        <tr>
          <td>{this.props.item.table_number}</td>
          <td>{this.props.item.artist_count}</td>
        </tr>
      </>
    );

  }
}

export default connect(mapStoreToProps)(QueueByEventItem);
