import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';
import EventCompletedItem from "../EventCompletedItem/EventCompleteItem"
import Nav from '../../../Nav/Nav';
import "./EventCompleted.css"

class EventCompleted extends Component {
    componentDidMount = () => {
        this.props.dispatch({
            type: 'FETCH_COMPLETED' //grabs only completed events
        })
    };//end componentDidMount


    render() {

        if (this.props.store.eventCompletedReducer.length >0 && 
            this.props.store.user.auth_level==="superAdmin" || 
            this.props.store.user.auth_level==="admin"){
             return (
                <div>
                    <Nav />
                  
                    <div id="completed-main"> 
                    <h2 className="completed-h2">Completed Events</h2>
                    <p>Completed events only appear here when you complete all requests and events to give you total artists and event details.</p>
                        <table id="completed-table">
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

        else if (this.props.store.eventCompletedReducer.length === 0 
            && this.props.store.user.auth_level==="superAdmin" || 
            this.props.store.user.auth_level==="admin"){
            return (
                    <div>
                            <Nav />
                            <div id="completed-main">
                                        <h2 className="completed-h2">Completed Events</h2>
                                        <h4 className="completed-h4">Sorry, there are no completed events! Please complete them!</h4>
                            </div>
                        </div>
            )
        }

        else if (this.props.store.user.auth_level !== "superAdmin" || this.props.store.user.auth_level !=="admin"){
            return (
                    <div className="app-unauthorized-container">
                    <Nav />
                            <div className="unauthorized-h2">
                                <h2 className="unauthorized-h2">
                                Sorry! But you are not authorized to be here! 
                                </h2>
                            </div>
                    </div>
            )
        }
        
    }
}

export default connect(mapStoreToProps)(EventCompleted);