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
import InputLabel from '@material-ui/core/InputLabel';
import EditIcon from '@material-ui/icons/Edit';

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
                              id: this.props.matchID
                        });
                  };

            handleClose = () => {
                        this.setState({
                              open: false
                        });
                  };

            handleInputChangeFor = (propertyName) => (event) => {  
                        this.setState({
                              ...this.state,
                              [propertyName]: event.target.value,
                              button: false,
                              timestamp: this.state.date + " " + this.state.time,
                        });
                  }; //end handleInputChange


      render(){
            return (
                  <div>
                  <Button variant="outlined" onClick={this.handleClickOpen}><EditIcon/></Button>
                        <Dialog open={this.state.open} onClose={this.handleClose} fullWidth={true} maxWidth="md">
                        <DialogTitle>Edit Event</DialogTitle>
                              <DialogContent>
                                    <InputLabel htmlFor="event-create-date">Date</InputLabel>
                                          <TextField 
                                                name="date"
                                                type="date"
                                                variant="outlined"
                                                value={this.state.date}
                                                size="small"
                                                id="event-create-date"
                                                onChange={this.handleInputChangeFor('date')}
                                          />
                                    <InputLabel htmlFor="event-create-time">Time</InputLabel>
                                          <TextField 
                                                name="time"
                                                type="time"
                                                variant="outlined"
                                                value={this.state.time}
                                                size="small"
                                                id="event-create-time"
                                                onChange={this.handleInputChangeFor('time')}
                                          />
                                    <InputLabel htmlFor="event-create-location">Location</InputLabel>
                                          <TextField 
                                                name="location"
                                                variant="outlined"
                                                value={this.state.location}
                                                size="small"
                                                id="event-create-location"
                                                onChange={this.handleInputChangeFor('location')}
                                          />
                        </DialogContent>
                  <DialogActions>
                        <Button onClick={this.handleClose}>Cancel</Button>
                        <Button onClick={this.updateSpecificEvent} disabled={this.state.button}>Edit Event</Button>
                  </DialogActions>
            </Dialog>
      </div>
      );
      }
}

export default connect(mapStoreToProps)(EventEdit);