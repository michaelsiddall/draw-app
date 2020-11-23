import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';
import { HashRouter, Link } from 'react-router-dom';

import EventCompleteConfirm from '../EventConfirm/EventCompleteConfirm';
import EventEdit from "../EventEdit/EventEdit";
import EventDeleteConfirm from "../EventConfirm/EventDeleteConfirm";

//materialUI and styling
import Button from '@material-ui/core/Button';
import "./EventItem.css"

class EventItem extends Component {


    render() {
            let t = new Date (this.props.item.timestamp)
            let time = t.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: "America/Chicago" })
            let timeForEdit = t.toTimeString().split(' G')[0]
        return (
            <HashRouter>
                    <tr id="event-item-tr"> 
                        <td>{this.props.item.location}</td>
                        <td>{this.props.item.timestamp.split('T')[0]}</td>
                        <td>{time}</td>
                        <td><Link to={`event/${this.props.item.id}/requests`}>
                                <Button id="queue-btn" color="secondary">Queue</Button>
                                </Link>
                        </td>
                        <td><EventEdit
                                matchID={this.props.item.id}
                                item={this.props.item}
                                time={timeForEdit}
                                date={this.props.item.timestamp.split('T')[0]}
                        /></td>
                        <td><EventCompleteConfirm
                                item={this.props.item}
                                date={this.props.item.timestamp.split('T')[0]}
                                time={time}
                        /></td>
                        <td><EventDeleteConfirm
                                item={this.props.item}
                                date={this.props.item.timestamp.split('T')[0]}
                                time={time}
                        /></td>
                    </tr>
            </HashRouter>
        );
    }
}

export default connect(mapStoreToProps)(EventItem);