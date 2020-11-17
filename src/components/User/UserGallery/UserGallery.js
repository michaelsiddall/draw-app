import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import UserGalleryCard from './UserGalleryCard';
import './UserGallery.css';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class UserGallery extends Component {
  state = {
    heading: 'Gallery',
    location: null,
  };

  //   componentWillMount() {
  //     this.props.dispatch({ type: 'GET_APPROVED_DRAWINGS' });
  //   }

  componentDidMount = () => {
    console.log('in componentDidMount');
    this.props.dispatch({
      type: 'FETCH_EVENTS',
    });
  };

  onChange = (event) => {
    console.log('payload is', event.target.value);
    this.props.dispatch({
      type: 'FETCH_APPROVED_EVENT_DRAWINGS',
      url: `/api/drawing/approved/${event.target.value}`,
    });
  };

  ///ON CHANGE DISPATCH WITH EVENT ID AS URL PARAM TO ROUTER FOR DB REQUEST OF APPROVED
  //   DRAWING FOR SPECIFIC EVENT ID, DB RESPONSE IS YIELD PUT INTO NEW REDUCER
  //   WHICH WE THEN MAP THROUGH FOR GALLERY

  render() {
    return (
      <div>
        <h2>{this.state.heading}</h2>

        <select
          required
          className='selectCentered'
          defaultValue={''}
          onChange={(event) => this.onChange(event)}
        >
          <option value='' disabled>
            Select Event
          </option>

          {this.props.store.eventReducer.map((event) => {
            return (
              <option key={event.id} value={event.id}>
                {event.location}
              </option>
            );
          })}
        </select>

        <div className='pendingGrid'>
          {this.props.store.approved.map((drawing) => {
            return <UserGalleryCard drawing={drawing} />;
          })}
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(UserGallery);
