import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import EventsCreate from "./EventCreate/EventCreate";
import EventItem from "./EventItem/EventItem";
import { HashRouter, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


class EventAdminEvent extends Component {
    componentDidMount = () => {
        this.props.dispatch({
            type: 'FETCH_EVENTS' //grabs only uncompleted events
        })
    };//end componentDidMount


    render() {
        return (
            <HashRouter>
                <div id="events-container">
                    <Button><Link to="/events/completed">Completed Events</Link></Button>
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
                                        <th>Complete</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.store.eventReducer.map((item, i) =>
                                        <EventItem
                                            key={i}
                                            item={item}
                                        />)}
                                </tbody>
                            </table>
                        </div>
                </div>
            </HashRouter>
        );
    }
}

export default connect(mapStoreToProps)(EventAdminEvent);