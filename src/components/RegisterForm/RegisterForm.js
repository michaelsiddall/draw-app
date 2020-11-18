import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Button from '@material-ui/core/Button';
import "./RegisterForm.css"
import { TextField} from '@material-ui/core';

class RegisterForm extends Component {

          componentDidUpdate(prevProps, prevState){
            if (this.state.username !== prevState.username || this.state.password !== prevState.password ){
                  this.setState({
                          username: this.state.username,
                          password: this.state.password,
                  })
            }
        }
        
  state = {
    username: '',
    password: '',
    helperText: '',
    error: false
  };

              registerUser = (event) => {
                      event.preventDefault();

                      if (this.state.username.length>3 && this.state.password.length>3) {
                            this.props.dispatch({
                              type: 'REGISTER',
                              payload: {
                                username: this.state.username,
                                password: this.state.password,
                              },
                            });
                            this.props.dispatch({
                              type: 'LOGIN',
                              payload: {
                                username: this.state.username,
                                password: this.state.password,
                              },
                            });
                      } else {
                            this.setState({
                              helperText: 'Must be 5 characters or more',
                              error: true
                            })
                            this.props.dispatch({ type: 'REGISTRATION_INPUT_ERROR' });
                      }
            }; // end registerUser

              handleInputChangeFor = (propertyName) => (event) => {
                this.setState({
                  [propertyName]: event.target.value,
                });
              };

  render() {
    return (
      <div id="register-div">
        <h2 id="register-h2">Register User</h2>
        {this.props.store.errors.registrationMessage && (
          <p className="alert" role="alert">
            {this.props.store.errors.registrationMessage}
          </p>
        )}
        <div className="textfield-div">
            <TextField
              type="text"
              name="username"
              helperText={this.state.helperText}
              error={this.state.error}
              variant="outlined"
              required={true}
              label="User Name"
              InputLabelProps={{shrink: true}}
              value={this.state.username}
              id="register-textfield"
              onChange={this.handleInputChangeFor('username')}
              fullWidth
            />
        </div>
        <div className="textfield-div">
            <TextField
              type="password"
              name="password"
              helperText={this.state.helperText}
              error={this.state.error}
              variant="outlined"
              required={true}
              label="Password"
              InputLabelProps={{shrink: true}}
              value={this.state.password}
              id="register-textfield"
              onChange={this.handleInputChangeFor('password')}
              fullWidth
            />
        </div>
        <div className="reg-log-btn-div">
          <Button id="register-btn" onClick={this.registerUser}>Register</Button>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(RegisterForm);