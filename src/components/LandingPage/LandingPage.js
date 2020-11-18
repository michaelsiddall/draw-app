import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Nav from '../Nav/Nav';
import './LandingPage.css';
import Grid from '@material-ui/core/Grid';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
import LoginForm from "../LoginForm/LoginForm";
class LandingPage extends Component {


  onLogin = (event) => {
    this.props.history.push('/login');
  };

  render() {
    return (
      <div>
        <Nav />

        <Grid container spacing={0} justify="center" alignItems="center">
          <Grid item xs><RegisterForm /></Grid>
          <Grid item xs><LoginForm/></Grid>
        </Grid>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
