import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';
import { TextField} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import EventCreateConfim from '../EventConfirm/EventCreateConfim';
import Button from '@material-ui/core/Button';



class EventCreate extends Component {
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
                date: '',
                time: '',
                location: '',
                timestamp: '',
                button: true,
                open: false
            }

            handleInputChangeFor = (propertyName) => (event) => {  
                    this.setState({
                        ...this.state,
                        [propertyName]: event.target.value,
                        timestamp: this.state.date + " " + this.state.time,
                    });
                    if (this.state.date !=='' && this.state.time !=='' && this.state.location !==''){
                        this.setState({
                            button: false
                        })
                    }
            }; //end handleInputChange

    render() {
        return (
            <>

            <InputLabel htmlFor="event-create-date">Date</InputLabel>
                    <TextField 
                        name="date"
                        type="date"
                        required={true}
                        variant="outlined"
                        value={this.state.date}
                        size="small"
                        id="event-create-date"
                        onChange={this.handleInputChangeFor('date')}
                    />

            <InputLabel htmlFor="event-create-time">Time</InputLabel>
                    <TextField
                        name="time"
                        required={true}
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
                        required={true}
                        variant="outlined"
                        value={this.state.location}
                        size="small"
                        id="event-create-location"
                        onChange={this.handleInputChangeFor('location')}
                    />

            <EventCreateConfim 
                            disabled={this.state.button}
                            item={this.state}/>

                </>
        )
    }
}

export default connect(mapStoreToProps)(EventCreate);