import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import EventAdminQueueItem from '../EventAdminQueueItem/EventAdminQueueItem';

class EventAdminQueue extends Component {
  state = {};

  componentDidMount = () => {
    this.props.dispatch({
      type: 'FETCH_REQUEST', //grabs only uncompleted requests
    });
  }; //end componentDidMount

  render() {
    return (
      <div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Table Number</th>
                <th>Number of Artists</th>
                <th>Request Fulfilled</th>
              </tr>
            </thead>
            <tbody>
              {this.props.store.requestReducer.map((item, i) => (
                <EventAdminQueueItem key={i} item={item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(EventAdminQueue);
