import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Button from '@material-ui/core/Button';
import "./LoginForm.css"
import { TextField} from '@material-ui/core';

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    helperText: '',
    error: false
  };

            login = (event) => {
                      event.preventDefault();

                      if (this.state.username.length>2 && this.state.password.length>2) {
                            this.props.dispatch({
                              type: 'LOGIN',
                              payload: {
                                username: this.state.username,
                                password: this.state.password,
                              },
                            });
                      } else {
                            this.setState({
                              helperText: 'Required',
                              error: true
                            })
                            this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
                      }
            }; // end login

            handleInputChangeFor = (propertyName) => (event) => {
              this.setState({
                [propertyName]: event.target.value,
              });
            };

  render() {
    return (
      <div id="login-div">
        <h2 id="login-h2">Login</h2>
        {this.props.store.errors.loginMessage && (
          <p className="alert" role="alert">
            {this.props.store.errors.loginMessage}
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
              id="login-textfield"
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
              id="login-textfield"
              onChange={this.handleInputChangeFor('password')}
              fullWidth
            />
        </div>
        <div className="reg-log-btn-div">
          <Button id="login-btn" onClick={this.login}>Login</Button>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LoginForm);
