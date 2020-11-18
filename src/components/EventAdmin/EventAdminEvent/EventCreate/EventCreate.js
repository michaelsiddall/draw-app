import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';
import { TextField} from '@material-ui/core';
import EventCreateConfim from '../EventConfirm/EventCreateConfim';
import "./EventCreate.css"
import Grid from '@material-ui/core/Grid';


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
                open: false,
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
            <div id="event-create-div-container">
                <h2>Create an Event</h2>
                <p>
                    Create an event with date, time and location. Submit button is disabled until all fields are filled.
                </p>
                    <Grid container spacing={2} direction="row" justify="center" alignItems="center" id="event-create-grid-container">
                            <Grid item xs>
                                    <TextField 
                                        name="date"
                                        InputLabelProps={{shrink: true}}
                                        label="Date"
                                        type="date"
                                        required={true}
                                        variant="filled"
                                        value={this.state.date}
                                        size="small"
                                        color="primary"
                                        id="event-create-date"
                                        onChange={this.handleInputChangeFor('date')}
                                    />
                            </Grid>
                            <Grid item xs>
                                    <TextField
                                        name="time"
                                        InputLabelProps={{shrink: true}}
                                        label="Time"
                                        required={true}
                                        type="time"
                                        variant="filled"
                                        value={this.state.time}
                                        size="small"
                                        color="primary"
                                        id="event-create-time"
                                        onChange={this.handleInputChangeFor('time')}
                                    /></Grid>
                            <Grid item xs>
                                <TextField 
                                        name="location"
                                        InputLabelProps={{shrink: true}}
                                        label="Location"
                                        required={true}
                                        variant="filled"
                                        value={this.state.location}
                                        size="small"
                                        color="primary"
                                        id="event-create-location"
                                        onChange={this.handleInputChangeFor('location')}
                                    />
                            </Grid>
                            <Grid item xs>
                            <EventCreateConfim 
                                            disabled={this.state.button}
                                            item={this.state}/>
                            </Grid>
                </Grid>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(EventCreate);