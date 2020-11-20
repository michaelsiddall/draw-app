import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';
import EventCompletedItem from "../EventCompletedItem/EventCompleteItem"
import Nav from '../../../Nav/Nav';

class EventCompleted extends Component {
    componentDidMount = () => {
        this.props.dispatch({
            type: 'FETCH_COMPLETED' //grabs only completed events
        })
    };//end componentDidMount


    render() {
        return (
                <div>
                    <Nav />
                   
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Location</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Total Artists</th>
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
        );
    }
}

export default connect(mapStoreToProps)(EventCompleted);