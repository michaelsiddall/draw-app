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

class RequestComplete extends Component {
            state = {
                        open: false,
                        id: ''
            }

            confirmCompleteQueue=()=>{
                    this.props.dispatch({
                                type: 'COMPLETE_REQUEST',
                                url: `/api/request/completed/${this.props.item.request_id}`
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
                  <Button variant="outlined" onClick={this.handleClickOpen}><CheckCircleIcon/></Button>
                        <Dialog open={this.state.open} onClose={this.handleClose}>
                              <DialogTitle>Complete Request</DialogTitle>
                                    <DialogContent>
                                          Please Confirm Request Completion
                                          <ul>
                                                <li>Table Number: {this.props.tableNumber}</li>
                                                <li>Artist Count: {this.props.artistCount}</li>
                                          </ul>
                                    </DialogContent>
                                    <DialogActions>
                                          <Button onClick={this.handleClose}>Cancel</Button>
                                          <Button onClick={this.confirmCompleteQueue}>Complete Request</Button>
                                    </DialogActions>
                        </Dialog>
                  </div>
      );
      }
}

export default connect(mapStoreToProps)(RequestComplete);