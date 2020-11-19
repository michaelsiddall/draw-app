import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { HashRouter, Link} from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';
import Button from '@material-ui/core/Button';
import "./RegisterPage.css"

class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
  };

  render() {
    return (
      <HashRouter>
        <div id="reg-page-container">
          <div id="reg-form-div">
          <RegisterForm />
            <center>
                <p>Already a user?</p>
                    <Link to="/login"><Button id="reg-link-btn">Login</Button></Link>
            </center></div></div>
      </HashRouter>
    );
  }
}

export default connect(mapStoreToProps)(RegisterPage);
