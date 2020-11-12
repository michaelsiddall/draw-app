import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';


class QueueByEventItem extends Component {


  render() {
    console.log('QueueItem', this.props.item)
    return (
      <>
        <tr>
          <td></td>
          <td></td>
        </tr>
      </>
    );
  }
}

export default connect(mapStoreToProps)(QueueByEventItem);