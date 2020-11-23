import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import QueueItem from './QueueItem/QueueItem';

import Nav from '../../Nav/Nav';
import "./EventAdminQueue.css"

//requests queue by event
//on events page, this page will pop up when you click on the queue button

class EventAdminQueue extends Component {

            componentDidMount = () => {
                    this.props.dispatch({
                      type: 'FETCH_BY_EVENT', //grabs only uncompleted requests by event id
                      payload: this.props.match.params.id
                    });
                    // setInterval(this.refresh, 10000);
            }; //end componentDidMount

              // Refresh and grab all new data
            // refresh = () => {
            //   this.props.dispatch({
            //     type: 'FETCH_BY_EVENT', //grabs only uncompleted requests
            //     payload: this.props.match.params.id,
            //   });
            // };


  render() {
    if (this.props.store.queueReducer.length > 0 && this.props.store.user.auth_level==="superAdmin" || this.props.store.user.auth_level==="admin") {
      return (
        <div>
          <Nav />
          <div id="queue-main-container">
            <div id="white-div">
                      <div id="queue-main">
                        <h2 className="event-queue-h2">Material Requests by Event</h2>
                        <table id="queue-table">
                          <thead>
                            <tr>
                              <th>Table Number</th>
                              <th>Number of Artists</th>
                              <th>Request Fulfilled</th>
                              <th>Delete</th>
                            </tr>
                          </thead>
                          <tbody>

                            {this.props.store.queueReducer.map((item) => (
                              <QueueItem
                                key={item.id}
                                item={item}
                                eventID={this.props.match.params.id}
                              />

                            ))}
                          </tbody>
                        </table>
                      </div>
          </div>
        </div>
        </div>
      );

    }

    else if (this.props.store.queueReducer.length === 0 && this.props.store.user.auth_level==="superAdmin" || this.props.store.user.auth_level==="admin") {
      return (
        <div>
          <Nav />
              <div id="queue-main">
                  <h2 className="event-queue-h2">Material Requests by Event</h2>
                  <h4 className="event-queue-h4">Sorry, there are no requests for this event!</h4>
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

export default connect(mapStoreToProps)(EventAdminQueue);
