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


class QueueDelete extends Component {
            state = {
                        open: false
            }

            confirmDeleteEvent=()=>{
                        this.props.dispatch({
                                type: 'DELETE_QUEUE',
                                url: '/api/request',
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
                              <DialogTitle>Delete Request</DialogTitle>
                                    <DialogContent>
                                          Please Confirm Request Deletion
                                          <ul>
                                                <li>Table Number: {this.props.tableNumber}</li>
                                                <li>Artist Count: {this.props.artistCount}</li>
                                          </ul>
                                    </DialogContent>
                                    <DialogActions>
                                          <Button onClick={this.handleClose}>Cancel</Button>
                                          <Button onClick={this.confirmDeleteEvent}>Delete Request</Button>
                                    </DialogActions>
                        </Dialog>
      </div>
      );
      }
}

export default connect(mapStoreToProps)(QueueDelete);