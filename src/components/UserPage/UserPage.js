import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ImageUpload from '../ImageUpload/ImageUpload';

class UserPage extends Component {
  componentDidMount() {
    //this.props.dispatch({ type: 'FETCH_USER' });
    this.props.dispatch({ type: 'GET_PENDING_DRAWINGS' });

  }
  // this component doesn't do much to start, just renders some user info to the DOM
  render() {
    return (
      <div>
        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
        <p>Your ID is: {this.props.store.user.id}</p>
        <LogOutButton className="log-in" />
        <ImageUpload />
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
