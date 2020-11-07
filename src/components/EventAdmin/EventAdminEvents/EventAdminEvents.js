import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import EventsCreate from "./EventsCreate/EventsCreate";
import EventsItem from "./EventsItem/EventsItem";

class EventAdminEvents extends Component {
    componentDidMount=()=>{
        this.props.dispatch({
            type: 'FETCH_EVENTS' //grabs only uncompleted events
        })
    };//end componentDidMount

    render() {
        return (
            <div id="events-container">
                <div id="event-create">
                    <EventsCreate/>
                </div>

                <div id="events-main">
                    <table>
                        <thead>
                            <tr>
                                <th>Location</th>
                                <th>Date & Time</th>
                                <th>Material Request Queue</th>
                                <th>Edit</th>
                                <th>Hide</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.store.eventsReducer.map((item, i)=>
                            <EventsItem 
                            key={i}
                            item={item}
                            />)}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(EventAdminEvents);