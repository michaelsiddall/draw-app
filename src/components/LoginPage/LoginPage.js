import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter, Link} from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import LoginForm from '../LoginForm/LoginForm';
import Button from '@material-ui/core/Button';
import "./LoginPage.css"
import door from "../../Images/Door.jpg";

class LoginPage extends Component {
  render() {
    return (
      <HashRouter>
      <div id="login-page-container" styles={{ backgroundImage:`url(${door})` }}>
                <div id="login-form-div">
                  <LoginForm />
                <center>
                  <p>Not a user yet?</p>
                <Link to="/registration"><Button id="login-link-btn">Sign Up</Button></Link>
                </center>
              </div>
      </div>
      </HashRouter>
    );
  }
}

export default connect(mapStoreToProps)(LoginPage);
