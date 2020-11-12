import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import RequestItem from "./RequestItem/RequestItem";

class EventAdminRequest extends Component {

        componentDidMount = () => {
          this.props.dispatch({
            type: 'FETCH_REQUEST', //grabs only uncompleted requests
          });
        }; //end componentDidMount

  render() {
        if (this.props.store.requestReducer.length >0) {
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
                                  <RequestItem key={i} item={item} />
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                    );
        }

        else if (this.props.store.requestReducer.length ===0){
          return (
            <div>
              <h4>Sorry, there are no requests for this event!</h4>
            </div>
       )
     }
  }
}

export default connect(mapStoreToProps)(EventAdminRequest);
