import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import EventsCreate from "./EventCreate/EventCreate";
import EventItem from "./EventItem/EventItem";

class EventAdminEvents extends Component {
    componentDidMount = () => {
        this.props.dispatch({
            type: 'FETCH_EVENTS' //grabs only uncompleted events
        })
    };//end componentDidMount


    render() {
        return (
            <div id="events-container">
                <div id="event-create">
                    <EventsCreate />
                </div>

                <div id="events-main">
                    <table>
                        <thead>
                            <tr>
                                <th>Location</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Material Request</th>
                                <th>Edit</th>
                                <th>Completed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.store.eventsReducer.map((item, i) =>
                                <EventItem
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