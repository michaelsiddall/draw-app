import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import UserMaterialRequest from '../../User/UserMaterialRequest/UserMaterialRequest';

class EventAdminQueue extends Component {
  state = {};

  //   componentDidMount () => {
  //       this.props.dispatch({

  //       })
  //   }

  render() {
    return (
      // console.log('request reducer is', this.props.store.requestReducer);

      <div>
        {/* <Button>
          <Link to='/events'>Back to Events</Link>
        </Button> */}
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
              <EventAdminQueueItem materialRequest={request} />;
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(EventAdminQueue);
