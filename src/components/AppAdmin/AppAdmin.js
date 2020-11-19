import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthDeleteConfirm from './AuthDeleteConfirm';
import Nav from '../Nav/Nav';
import AuthEdit from './AuthEdit';
import mapStateToProps from "../../redux/mapStoreToProps"



import "./AppAdmin.css"
import Grid from '@material-ui/core/Grid';


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
                  <Grid id="grid-container">
                        <Grid item xs key={auth.id} id="app-admin-div">
                                <p>Username: {auth.username}</p>
                                <p>Auth level: {auth.auth_level}</p>
                                <AuthEdit user={auth} />
                                <AuthDeleteConfirm user={auth} />
                        </Grid>
                  </Grid>
                ))}
                ;
              </div>
    );
    }
   
    else {
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


export default connect(mapStateToProps)(AppAdmin);
