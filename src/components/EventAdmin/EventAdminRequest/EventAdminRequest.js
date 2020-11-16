import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import RequestItem from "./RequestItem/RequestItem";
import Nav from '../../Nav/Nav';
class EventAdminRequest extends Component {

  componentDidMount = () => {
    this.props.dispatch({
      type: 'FETCH_REQUEST', //grabs only uncompleted requests
    });
  }; //end componentDidMount

  render() {
    if (this.props.store.requestReducer.length > 0) {
      return (
        <div>
          <Nav />

          <div>
            <table>
              <thead>
                <tr>
                  <th>Location</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Table Number</th>
                  <th>Number of Artists</th>
                  <th>Complete Request</th>
                  <th>Delete Request</th>
                </tr>
              </thead>
              <tbody>
                {this.props.store.requestReducer.map((item, i) => (
                  <RequestItem key={i} item={item} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    else if (this.props.store.requestReducer.length === 0) {
      return (
        <div>
          <Nav />
          <h4>Sorry, there are no requests for this event!</h4>
        </div>
      )
    }
  }
}

export default connect(mapStoreToProps)(EventAdminRequest);
