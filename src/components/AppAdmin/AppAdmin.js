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

    if(this.props.store.user.auth_level==="superAdmin"){
       return (
              <div id="app-main-container">
                <div id="transluscent-div">
                    <Nav />
                          <div>
                              <div className="h2-div"><h2 id="app-admin-h2">Users and Permissions</h2> </div>
                              <Grid id="app-grid-container" 
                                        container direction="row" wrap="wrap"
                                        alignItems="center">
                                    {this.props.auth.map((auth) => (
                                     
                                            <Grid item xs="auto" key={auth.id} id="app-grid-item">
                                                    <p id="app-user-p">Username: {auth.username}</p>
                                                    <p id="app-auth-p">Authorization Level: {auth.auth_level}</p>
                                                    <AuthEdit user={auth} />
                                                    <AuthDeleteConfirm user={auth} />
                                            </Grid>
                                      
                                    ))}</Grid>
                                    </div>
                          </div>
              </div>
    );
    }
   
    else if(this.props.store.user.auth_level !=="superAdmin"){
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


export default connect(mapStateToProps)(AppAdmin);
