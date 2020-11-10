import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';

//material UI
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


class EventCompleteConfirm extends Component {
            state = {
                        open: false
            }

            confirmCompleteEvent=()=>{
                    this.props.dispatch({
                                type: 'COMPLETE_EVENT',
                                url: `/api/event/completed/${this.props.item.id}`
                    });
                        this.handleClose();

            };//end confirmComplete
           
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
                  <Button variant="outlined" onClick={this.handleClickOpen}>Complete</Button>
                        <Dialog open={this.state.open} onClose={this.handleClose}>
                        <DialogTitle>Complete Event</DialogTitle>
                            <DialogContent>
                                Please Confirm Event Completion
                                <ul>
                                    <li>Location: {this.props.item.location}</li>
                                    <li>Date: {this.props.date}</li>
                                    <li>Time: {this.props.time}</li>
                                </ul>
                            </DialogContent>
                  <DialogActions>
                        <Button onClick={this.handleClose} color="primary">Cancel</Button>
                        <Button onClick={this.confirmCompleteEvent} color="primary">Complete</Button>
                  </DialogActions>
            </Dialog>
      </div>
      );
      }
}

export default connect(mapStoreToProps)(EventCompleteConfirm);