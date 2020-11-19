import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import QueueItem from './QueueItem/QueueItem';

import Nav from '../../Nav/Nav';


//requests queue by event

class EventAdminQueue extends Component {


  componentDidMount = () => {
    this.props.dispatch({
      type: 'FETCH_BY_EVENT', //grabs only uncompleted requests by event id
      payload: this.props.match.params.id
    });

  }; //end componentDidMount


  render() {

    if (this.props.store.queueReducer.length > 0 && this.props.store.user.auth_level==="superAdmin" || this.props.store.user.auth_level==="admin") {
      return (
        <div>
          <Nav />
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
      );

    }

    else if (this.props.store.queueReducer.length === 0 && this.props.store.user.auth_level==="superAdmin" || this.props.store.user.auth_level==="admin") {
      return (
        <div>
          <Nav />
          <h4>Sorry, there are no requests for this event!</h4>
        </div>
      )
    }


    else if (this.props.store.user.auth_level !== "superAdmin" || this.props.store.user.auth_level !=="admin"){
            return (
                    <div >
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
