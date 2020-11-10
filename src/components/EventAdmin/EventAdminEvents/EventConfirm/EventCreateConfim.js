import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';

//material UI
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


class EventCreateConfirm extends Component {
            state = {
                        open: false,
                        helperText: ''
            }

            confirmCreateEvent=()=>{
                    if (this.props.item.location !=='' && this.props.item.date !=='' && this.props.item.time !=='') 
                        {
                            this.props.dispatch({
                                type: 'POST_EVENT',
                                url: '/api/event',
                                payload: this.props.item
                        });

                        this.handleClose();
                            //window.location.reload();
                    } else {
                            this.setState({
                              helperText: 'Required'
                            })
                      }
            };//end confirmCreate
           
            

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
                  <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>Create Event</Button>
                        <Dialog open={this.state.open} onClose={this.handleClose}>
                        <DialogTitle>Create Event</DialogTitle>
                            <DialogContent>
                                Please Confirm Event Creation
                                <ul>
                                    <li>Location: {this.props.item.location}</li>
                                    <li>Date: {this.props.item.date}</li>
                                    <li>Time: {this.props.item.time}</li>
                                </ul>
                            </DialogContent>
                  <DialogActions>
                        <Button onClick={this.handleClose} color="primary">Cancel</Button>
                        <Button onClick={this.confirmCreateEvent} color="primary">Create</Button>
                  </DialogActions>
            </Dialog>
      </div>
      );
      }
}

export default connect(mapStoreToProps)(EventCreateConfirm);