import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthDeleteConfirm from './AuthDeleteConfirm';
import Nav from '../Nav/Nav';
import AuthEdit from './AuthEdit';
import mapStateToProps from "../../redux/mapStoreToProps"

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class AppAdmin extends Component {
  state = {
    heading: 'App Admin',
  };

  componentDidMount = () => {
    this.props.dispatch({
      type: 'FETCH_USERS',
    });
  };

  render() {
    console.log(this.props.store.user, "APP ADMIN")

    if(this.props.store.user.auth_level==="superAdmin"){
       return (
      <div>
                <Nav />

                <h2>Users and Permissions</h2>
                {this.props.auth.map((auth) => (
                  <div key={auth.id}>
                    <p>Username: {auth.username}</p>
                    <p>Auth level: {auth.auth_level}</p>
                    <AuthEdit user={auth} />
                    <AuthDeleteConfirm user={auth} />
                  </div>
                ))}
                ;
              </div>
    );
    }
   
    else {
      return (
        <div>
          <Nav />
          <h2>
            Sorry! But you are not authorized to be here! 
          </h2>
        </div>
      )
    }
  }
}


export default connect(mapStateToProps)(AppAdmin);
