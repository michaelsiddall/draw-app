import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';
import {Button, TextField} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import EventCreateConfim from '../EventConfirm/EventCreateConfim';


class EventCreate extends Component {
            state = {
                date: '',
                time: '',
                location: '',
                timestamp: '',
                button: true
            }

            handleInputChangeFor = (propertyName) => (event) => {  
                    this.setState({
                        ...this.state,
                        [propertyName]: event.target.value,
                        timestamp: this.state.date + " " + this.state.time,
                        button: false
                    });
            }; //end handleInputChange


    render() {
        console.log('EventCreate State:', this.state)
        return (
            <>

            <InputLabel htmlFor="event-create-date">Date</InputLabel>
                    <TextField 
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
            
            <InputLabel htmlFor="event-create-location">Location</InputLabel>
                <TextField 
                        helperText={this.state.helperText}
                        name="location"
                        required
                        variant="outlined"
                        value={this.state.location}
                        size="small"
                        id="event-create-location"
                        onChange={this.handleInputChangeFor('location')}
                    />
            <Button disabled={this.state.button}><EventCreateConfim 
                                    item={this.state} date={this.state.date}/>
            </Button>
                </>
        )
    }
}

export default connect(mapStoreToProps)(EventCreate);