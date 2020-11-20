import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import RequestItem from "./RequestItem/RequestItem";
import Nav from '../../Nav/Nav';
import "./EventAdminRequest.css"

class EventAdminRequest extends Component {

          componentDidMount = () => {
            this.props.dispatch({
              type: 'FETCH_REQUEST' //grabs only uncompleted requests
            });

            setInterval(this.refresh, 10000);
          }; //end componentDidMount

          refresh = () => {
            this.props.dispatch({
              type: 'FETCH_REQUEST' //grabs only uncompleted requests
            });
          };

  render() {
    if (this.props.store.requestReducer.length > 0 && this.props.store.user.auth_level==="superAdmin" || this.props.store.user.auth_level==="admin") {
      return (
        <div >
          <Nav />

                <div className="all-requests-container">
                  <h2 className="all-requests-h2">All Requests for All Events</h2>
                  <table id="all-requests-table">
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

    else if (this.props.store.requestReducer.length === 0 && this.props.store.user.auth_level==="superAdmin" || this.props.store.user.auth_level==="admin") {
      return (
        <div >
          <Nav />
          <div className="all-requests-container">
              <h2 className="all-requests-h2">All Requests for All Events</h2>
              <h4 className="all-requests-h4">Sorry, there are no requests!</h4>
          </div>
          
        </div>
      )
    }

    else if (this.props.store.user.auth_level !== "superAdmin" || this.props.store.user.auth_level !=="admin"){
            return (
                  <div className="app-unauthorized-container">
                    <Nav />
                          <div className="unauthorized-h2">
                              <h2 className="unauthorized-h2">
                                Sorry! But you are not authorized to be here! 
                              </h2>
                          </div>
                  </div>
            )
        }
  }
}

export default connect(mapStoreToProps)(EventAdminRequest);
