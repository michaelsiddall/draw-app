import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';
import {Button, TextField} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';


class EventCreate extends Component {
            state = {
                date: '',
                time: '',
                location: '',
                timestamp: '',
                error: '',
                helperText: ''
            }
            onSubmit = (event) => {
                    event.preventDefault();
                    
                      if (this.state.location.length>1 && this.state.date !=='' && this.state.time !=='') 
                      {
                            this.props.dispatch({
                                type: 'POST_EVENT',
                                url: '/api/event',
                                payload: this.state
                            });
                            this.clearInputFields();
                            window.location.reload();
                      } else {
                            this.setState({
                              helperText: 'Required',
                              error: true
                            })
                      }
            }; // end onSubmit
            
            clearInputFields = () =>{
                    this.setState({
                            date: '',
                            time: '',
                            location: '',
                            timestamp: '',
                            error: '',
                            helperText: ''
                    })
            }// end clearInputFields


            handleInputChangeFor = (propertyName) => (event) => {  
                    this.setState({
                        ...this.state,
                            [propertyName]: event.target.value,
                            timestamp: String(this.state.date) + " " + String(this.state.time)
                    });
            }; //end handleInputChange


    render() {
        console.log('EventCreate State:', this.state)
        return (
            <>
            <InputLabel htmlFor="event-create-location">Location</InputLabel>
                <TextField 
                        error={this.state.error}
                        helperText={this.state.helperText}
                        name="location"
                        required
                        variant="outlined"
                        value={this.state.location}
                        size="small"
                        id="event-create-location"
                        onChange={this.handleInputChangeFor('location')}
                    />

            <InputLabel htmlFor="event-create-date">Date</InputLabel>
                    <TextField 
                        error={this.state.error}
                        helperText={this.state.helperText}
                        name="date"
                        required
                        type="date"
                        variant="outlined"
                        value={this.state.date}
                        size="small"
                        id="event-create-date"
                        onChange={this.handleInputChangeFor('date')}
                    />

            <InputLabel htmlFor="event-create-time">Time</InputLabel>
                    <TextField 
                        error={this.state.error}
                        helperText={this.state.helperText}
                        name="time"
                        required
                        type="time"
                        variant="outlined"
                        value={this.state.time}
                        size="small"
                        id="event-create-time"
                        onChange={this.handleInputChangeFor('time')}
                    />

            <Button onClick={this.onSubmit}>Create Event</Button>
                </>
        )
    }
}

export default connect(mapStoreToProps)(EventCreate);