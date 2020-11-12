import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import QueueByEventItem from "./QueueByEventItem/QueueByEventItem";

class EventAdminQueueByEvent extends Component {

    componentDidMount = () => {
      this.props.dispatch({
        type: 'FETCH_BY_EVENT', //grabs only uncompleted requests by event
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
              {this.props.store.queueReducer.map((item, i) => (
                <QueueByEventItem key={i} item={item} />
              ))} 
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(EventAdminQueueByEvent);
