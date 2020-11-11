import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';
import EventCompletedItem from "../EventCompletedItem/EventCompleteItem"
import { HashRouter, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


class EventCompleted extends Component {
    componentDidMount = () => {
        this.props.dispatch({
            type: 'FETCH_COMPLETED' //grabs only completed events
        })
    };//end componentDidMount


    render() {
        return (
            <HashRouter>
                <div>
                    <Button><Link to="/events">Back to Events</Link></Button>
                        <div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Location</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Artists</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.store.eventCompletedReducer.map((item, i) =>
                                        <EventCompletedItem
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

export default connect(mapStoreToProps)(EventCompleted);