import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ImageUpload from '../ImageUpload/ImageUpload';
import Nav from '../Nav/Nav';
import "./UserPage.css"
class UserPage extends Component {
  componentDidMount() {
    //this.props.dispatch({ type: 'FETCH_USER' });
    this.props.dispatch({ type: 'GET_PENDING_DRAWINGS' });

  }
  // this component doesn't do much to start, just renders some user info to the DOM
  render() {
    return (
      <div>
        <Nav />
        <div id="user-page-container">        
            <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
            <p>Your ID is: {this.props.store.user.id}</p>
        </div>
      </div>
    );
    /*
    if (user === admin){
            return (
              <div>
              <Nav />
              <div id="user-page-container">        
                  <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
                  <p>Your ID is: {this.props.store.user.id}</p>
              </div>
            </div>
      )
    }
    else if ( user === user){
      return (
         <div>
            <Nav />
                <div id="user-page-container">        
                    <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
                    <p>Your ID is: {this.props.store.user.id}</p>
                    <p>Please wait to be given permission to access more information!</p>
                </div>
          </div>
      )
    }
    */
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
