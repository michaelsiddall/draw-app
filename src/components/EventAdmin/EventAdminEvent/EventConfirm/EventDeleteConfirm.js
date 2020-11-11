import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';

//material UI
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteIcon from '@material-ui/icons/Delete';


class EventDeleteConfirm extends Component {
            state = {
                        open: false
            }

            confirmDeleteEvent=()=>{
                        this.props.dispatch({
                                type: 'DELETE_EVENT',
                                url: '/api/event',
                                payload: this.props.item
                        });
                        this.handleClose();

            };//end confirmDelete
           
            handleClickOpen = () => {
                        this.setState({
                              open: true,
                        });
                  };

            handleClose = () => {
                        this.setState({
                              open: false
                        });
                  };

      render(){
            return (
                  <div>
                  <Button variant="outlined" onClick={this.handleClickOpen}><DeleteIcon/></Button>
                        <Dialog open={this.state.open} onClose={this.handleClose}>
                              <DialogTitle>Delete Event</DialogTitle>
                                    <DialogContent>
                                          Please Confirm Event Deletion
                                          <ul>
                                                <li>Location: {this.props.item.location}</li>
                                                <li>Date: {this.props.date}</li>
                                                <li>Time: {this.props.time}</li>
                                          </ul>
                                    </DialogContent>
                                    <DialogActions>
                                          <Button onClick={this.handleClose} color="primary">Cancel</Button>
                                          <Button onClick={this.confirmDeleteEvent} color="primary">Delete Event</Button>
                                    </DialogActions>
                        </Dialog>
      </div>
      );
      }
}

export default connect(mapStoreToProps)(EventDeleteConfirm);