import React, { Component } from 'react';
import { connect } from 'react-redux';

//material UI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import EditIcon from '@material-ui/icons/Edit';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import "./AppAdmin.css"


class AuthEdit extends Component {
  state = {
    open: false,
    id: this.props.user.id,
    username: this.props.user.username,
    auth_level: this.props.user.auth_level,
    button: true,
  };

  updateSpecificEvent = () => {
    this.props.dispatch({
      type: 'EDIT_USER_AUTH',
      payload: {
        id: this.state.id,
        username: this.state.username,
        auth_level: this.state.auth_level,
      },
    });
    this.setState({
      open: false,
      button: true,
    });
  }; //end update specific event

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value,
      button: false,
    });
  }; //end handleInputChange

  render() {
    return (
      <span className="admin-span">
        <Button variant='outlined' id="app-btn" onClick={this.handleClickOpen}>
          <EditIcon />
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth={true}
          maxWidth='md'
        >
          <DialogTitle>Edit User's Permissions</DialogTitle>
          <DialogContent>
            <InputLabel htmlFor='event-create-date'>Auth Level</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={this.state.auth_level}
              onChange={this.handleInputChangeFor('auth_level')}
            >
              <MenuItem value={'user'}>User</MenuItem>
              <MenuItem value={'admin'}>Admin</MenuItem>
              <MenuItem value={'superAdmin'}>Super Admin</MenuItem>
            </Select>

            <InputLabel htmlFor='event-create-location'>Username</InputLabel>
            <TextField
              name='location'
              required
              variant='outlined'
              value={this.state.username}
              size='small'
              id='event-create-location'
              onChange={this.handleInputChangeFor('username')}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>Cancel</Button>
            <Button
              onClick={this.updateSpecificEvent}
              disabled={this.state.button}
            >
              Edit User
            </Button>
          </DialogActions>
        </Dialog>
      </span>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(AuthEdit);
