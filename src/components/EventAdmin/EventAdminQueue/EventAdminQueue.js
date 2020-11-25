import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import QueueItem from './QueueItem/QueueItem';
import Button from '@material-ui/core/Button';
import Nav from '../../Nav/Nav';
import './EventAdminQueue.css';

//requests queue by event
//on events page, this page will pop up when you click on the queue button

class EventAdminQueue extends Component {
  componentDidMount = () => {
    this.refresh();
    this.timerId = setInterval(this.refresh, 30000);
  }; //end componentDidMount

  componentWillUnmount = () => {
    clearInterval(this.timerId);
  };

  refresh = () => {
    this.props.dispatch({
      type: 'FETCH_BY_EVENT', //grabs only uncompleted requests
      payload: this.props.match.params.id,
    });
  };

  render() {
    if (
      (this.props.store.queueReducer.length > 0 &&
        this.props.store.user.auth_level === 'superAdmin') ||
      this.props.store.user.auth_level === 'admin'
    ) {
      return (
        <div>
          <Nav />

          <div id='queue-main-container'>
            <div id='white-div'>
              <div id='queue-main'>
                <h2 className='event-queue-h2'>Material Requests by Event</h2>
                
                <p className="event-queue-p">
                  Please complete all requests, do NOT delete requests as they are completed. Only delete duplicate or requests mistakes. 
                  Completed requests lets us know how many artists were at each event in the Completed Events table. 
                </p>
                <Button id='refreshButton' onClick={this.refresh}>
                  Refresh Material Requests
                </Button>
                <table id='queue-table'>
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
    } else if (
      (this.props.store.queueReducer.length === 0 &&
        this.props.store.user.auth_level === 'superAdmin') ||
      this.props.store.user.auth_level === 'admin'
    ) {
      return (
        <div>
          <Nav />
          <div id='queue-main'>
            <h2 className='event-queue-h2'>Material Requests by Event</h2>
            <Button id='refreshButton' onClick={this.refresh}>
              Refresh Material Requests
            </Button>
            <h4 className='event-queue-h4'>
              Sorry, there are no requests for this event!
            </h4>
          </div>
        </div>
      );
    } else if (
      this.props.store.user.auth_level !== 'superAdmin' ||
      this.props.store.user.auth_level !== 'admin'
    ) {
      return (
        <div className='app-unauthorized-container'>
          <Nav />
          <div className='unauthorized-h2'>
            <h2 className='unauthorized-h2'>
              Sorry! But you are not authorized to be here!
            </h2>
          </div>
        </div>
      );
    }
  }
}

export default connect(mapStoreToProps)(EventAdminQueue);
