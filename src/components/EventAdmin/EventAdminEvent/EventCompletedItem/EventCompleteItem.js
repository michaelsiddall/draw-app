import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';
import "./EventCompletedItem.css"

class EventCompletedItem extends Component {

    render() {
            let t = new Date (this.props.item.timestamp)
            let time = t.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: "America/Chicago" })
        return (
            <>
                    <tr id="completed-item-tr"> 
                        <td>{this.props.item.location}</td>
                        <td>{this.props.item.timestamp.split('T')[0]}</td>
                        <td>{time}</td>
                        <td>{this.props.item.total_artists}</td>
                    </tr>
            </>
        );
    }
}

export default connect(mapStoreToProps)(EventCompletedItem);