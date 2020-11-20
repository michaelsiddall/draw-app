import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
//material UI
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteIcon from '@material-ui/icons/Delete';
import "./AppAdmin.css"


class AuthDeleteConfirm extends Component {
  state = {
    open: false,
  };

  confirmDeleteUser = () => {
    this.props.dispatch({
      type: 'DELETE_USER',
      url: `/api/admin/${this.props.user.id}`,
    });
    this.handleClose();
  }; //end confirmDelete

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

  render() {
    return (
      <span className="admin-span">
        <Button variant='outlined' id="app-btn" onClick={this.handleClickOpen}>
          <DeleteIcon />
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle>User Delete</DialogTitle>
          <DialogContent>
            Please Confirm User Deletion
            <ul>
              <li>Username: {this.props.user.username}</li>
              <li>Auth Level: {this.props.user.auth_level}</li>
            </ul>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color='primary'>
              Cancel
            </Button>
            <Button onClick={this.confirmDeleteUser} color='primary'>
              Delete User
            </Button>
          </DialogActions>
        </Dialog>
      </span>
    );
  }
}

export default connect(mapStoreToProps)(AuthDeleteConfirm);
