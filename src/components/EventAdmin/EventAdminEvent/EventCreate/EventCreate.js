import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';
import { TextField} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import EventCreateConfim from '../EventConfirm/EventCreateConfim';


class EventCreate extends Component {
      componentDidUpdate(prevProps, prevState){
          console.log("COMPONENT DID UPDATE", prevState)
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
                button: true
            }

            handleInputChangeFor = (propertyName) => (event) => {  
                    this.setState({
                        ...this.state,
                        [propertyName]: event.target.value,
                        timestamp: this.state.date + " " + this.state.time,
                    });
            }; //end handleInputChange

    render() {
        return (
            <>

            <InputLabel htmlFor="event-create-date">Date</InputLabel>
                    <TextField 
                        helperText={this.state.helperText}
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
                        helperText={this.state.helperText}
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
                        helperText={this.state.helperText}
                        name="location"
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