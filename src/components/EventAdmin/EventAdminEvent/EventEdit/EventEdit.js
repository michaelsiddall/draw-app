import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';

//material UI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';
import "../EventConfirm/EventConfirm.css"

class EventEdit extends Component {


      componentDidUpdate(prevProps, prevState){
            if (this.state.date !== prevState.date || this.state.time !== prevState.time || this.state.location !== prevState.location){
                  this.setState({
                        location: this.state.location,
                        date: this.state.date,
                        time: this.state.time,
                        timestamp: this.state.date + " " + this.state.time,
                  })
            }
      }

            state = {
                        open: false,
                        date: this.props.date,
                        time: this.props.time,
                        location: this.props.item.location,
                        timestamp: this.props.item.timestamp,
                        id:'',
                        button: true
            }

            updateSpecificEvent=()=>{
                        this.props.dispatch({
                                    type: 'UPDATE_EVENT', 
                                    payload: this.state
                        })
                        this.handleClose();
            };//end update specific event


  handleClickOpen = () => {
    this.setState({
      open: true,
      id: this.props.matchID,
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
      timestamp: this.state.date + ' ' + this.state.time,
    });
  }; //end handleInputChange

      render(){
            return (
                  <div>
                  <Button id="icon-btn"onClick={this.handleClickOpen}><EditIcon id="icon"/></Button>
                        <Dialog open={this.state.open} onClose={this.handleClose} fullWidth={true} maxWidth="md">
                        <DialogTitle><h3 id="edit-dialog-title">Edit Event</h3></DialogTitle>
                              <DialogContent>
                                          <TextField 
                                                InputLabelProps={{shrink: true}}
                                                label="Date"
                                                name="date"
                                                type="date"
                                                variant="outlined"
                                                value={this.state.date}
                                                size="small"
                                                id="event-edit-date"
                                                onChange={this.handleInputChangeFor('date')}
                                          />
                                          <TextField 
                                                InputLabelProps={{shrink: true}}
                                                label="Time"
                                                name="time"
                                                type="time"
                                                variant="outlined"
                                                value={this.state.time}
                                                size="small"
                                                id="event-edit-time"
                                                onChange={this.handleInputChangeFor('time')}
                                          />
                                          <TextField 
                                                InputLabelProps={{shrink: true}}
                                                label="Location"
                                                name="location"
                                                variant="outlined"
                                                value={this.state.location}
                                                size="small"
                                                id="event-edit-location"
                                                onChange={this.handleInputChangeFor('location')}
                                          />
                        </DialogContent>
                  <DialogActions>
                        <Button id="confirm-cancel-btn" onClick={this.handleClose}>Cancel</Button>
                        <Button id="confirm-submit-btn" onClick={this.updateSpecificEvent} disabled={this.state.button}>Edit Event</Button>
                  </DialogActions>
            </Dialog>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(EventEdit);
