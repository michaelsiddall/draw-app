import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';

//material UI
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import "./EventConfirm.css"

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
                  <Button id="icon-btn" onClick={this.handleClickOpen}><CheckCircleIcon id="icon"/></Button>
                        <Dialog open={this.state.open} onClose={this.handleClose}>
                              <DialogTitle><h3 id="dialog-title">Complete Event</h3></DialogTitle>
                                    <DialogContent>
                                          Please Confirm Event Completion
                                          <ul>
                                                <li>Location: {this.props.item.location}</li>
                                                <li>Date: {this.props.date}</li>
                                                <li>Time: {this.props.time}</li>
                                          </ul>
                                    </DialogContent>
                                    <DialogActions>
                                          <Button id="confirm-cancel-btn" onClick={this.handleClose} color="primary">Cancel</Button>
                                          <Button id="confirm-submit-btn" onClick={this.confirmCompleteEvent} color="primary">Complete Event</Button>
                                    </DialogActions>
                        </Dialog>
                  </div>
      );
      }
}

export default connect(mapStoreToProps)(EventCompleteConfirm);