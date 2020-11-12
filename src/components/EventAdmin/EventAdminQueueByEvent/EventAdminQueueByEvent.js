import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import QueueComplete from "../EventAdminQueue/QueueConfirm/QueueComplete";
import QueueDelete from "../EventAdminQueue/QueueConfirm/QueueDelete";


class EventAdminQueueByEvent extends Component {

    componentDidMount = () => {
      this.props.dispatch({
        type: 'FETCH_BY_EVENT', //grabs only uncompleted requests by event id
        payload: this.props.match.params.id
      });
    }; //end componentDidMount

  render() {
      console.log('QUEUE BY EVENT', this.props.store.queueReducer)
    return (
      <div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Table Number</th>
                <th>Number of Artists</th>
                <th>Request Fulfilled</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                      <td>{this.props.store.queueReducer.table_number}</td>
                      <td>{this.props.store.queueReducer.artist_count}</td>
                      <td><QueueComplete
                            tableNumber= {this.props.store.queueReducer.table_number}
                            artistCount = {this.props.store.queueReducer.artist_count}
                            item={this.props.store.queueReducer}
                      /></td>
                      <td><QueueDelete
                            tableNumber= {this.props.store.queueReducer.table_number}
                            artistCount = {this.props.store.queueReducer.artist_count}
                            item={this.props.store.queueReducer}
                      /></td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(EventAdminQueueByEvent);
