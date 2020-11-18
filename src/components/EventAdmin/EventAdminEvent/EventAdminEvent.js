import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import EventsCreate from "./EventCreate/EventCreate";
import EventItem from "./EventItem/EventItem";
import { HashRouter, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Nav from '../../Nav/Nav';
import "./EventAdminEvent.css";

class EventAdminEvent extends Component {
    componentDidMount = () => {
        this.props.dispatch({
            type: 'FETCH_EVENTS' //grabs only uncompleted events
        })
    };//end componentDidMount


    render() {
        if (this.props.store.eventReducer.length >0){
                    return (
                        <HashRouter>
                            <Nav />

                            <div id="events-container">
                                    <EventsCreate />

                                <div id="events-main">
                                    <div id="events-instructions">
                                        <h2 className="all-events-h2">Upcoming Events</h2>
                                        <p className="event-p">  
                                            Please complete events when they are finished. Do NOT delete events if they are not created by mistake.
                                            Completed events are sent to the completed events table so we can keep track of how many artists are 
                                            participating at each event.
                                        </p>
                                    </div>
                                    <table id="events-table">
                                        <thead>
                                            <tr>
                                                <th>Location</th>
                                                <th>Date</th>
                                                <th>Time</th>
                                                <th>Material Request</th>
                                                <th>Edit Event</th>
                                                <th>Complete Event</th>
                                                <th>Delete Event</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.props.store.eventReducer.map(item =>
                                                <EventItem
                                                    key={item.id}
                                                    item={item}
                                                />)}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </HashRouter>
                    );
        }
        else if (this.props.store.eventReducer.length === 0){
            return (
                    <HashRouter>
                            <Nav />

                            <div id="events-container">
                                    <EventsCreate />
                                <div id="all-requests-div">
                                        <h2 className="all-events-h2">Upcoming Events</h2>
                                        <h4 className="all-events-h4">Sorry, there are no events! Please add more!</h4>
                                </div>
                            </div>
                        </HashRouter>
            )
        }
        
    }
}

export default connect(mapStoreToProps)(EventAdminEvent);