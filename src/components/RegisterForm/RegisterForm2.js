import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';



//materialUI & styling
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './RegisterForm.css'


class RegisterForm extends Component {
            state = {
                  username: '',
                  password: '',
                  helperTextUsername: '',
                  helperTextPassword: '',
                  error: false
            }; //end state

            registerUser = (event) => {
                      event.preventDefault();

                      if (this.state.username.length>5 && this.state.password.length>10) {
                            this.props.dispatch({
                              type: 'REGISTER',
                              payload: {
                                username: this.state.username,
                                password: this.state.password,
                              },
                            }); //immediately logins after registration
                            this.props.dispatch({
                              type: 'LOGIN',
                              payload: {
                                username: this.state.username,
                                password: this.state.password,
                              },
                            });
                      } else {
                            this.setState({
                              helperTextUsername: 'Username must be 5 characters or more',
                              helperTextPassword: 'Password must be 10 characters or more',
                              error: true
                            })
                            this.props.dispatch({ type: 'REGISTRATION_INPUT_ERROR' });
                      }
            }; // end registerUser

            handleInputChangeFor = (propertyName) => (event) => {
              this.setState({
                [propertyName]: event.target.value,
              });
            }; //end handleInputChange

  render() {
    return (
            <div className="register-div">
            <form>
            <h2 id="register-title">Register</h2>
                  <div className="username-login">
                    <TextField 
                            error={this.state.error}
                            helperText={this.state.helperTextUsername}
                            name="username"
                            required
                            fullWidth
                            variant="outlined"
                            value={this.state.username}
                            label="Username"
                            onChange={this.handleInputChangeFor('username')}
                          />
                  </div>
                  <div className="password-login">
                    <TextField
                            error={this.state.error}
                            helperText={this.state.helperTextPassword}
                            name="password"
                            required
                            fullWidth
                            variant="outlined"
                            value={this.state.password}
                            label="Password"
                            onChange={this.handleInputChangeFor('password')}
                          />
                  </div>
                <div id="registration-div">
                        <Button id="registration-btn" onClick={this.registerUser}>Register</Button>
                </div>
              </form>
            </div>    
    );
  }
} //end render

export default connect(mapStoreToProps)(RegisterForm);