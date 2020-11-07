import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';
import EventsEdit from "../EventsEdit/EventsEdit";

//materialUI and styling
import Button from '@material-ui/core/Button';
import "./EventsItem.css"

class EventsItem extends Component {
    componentDidMount=()=>{
        this.props.dispatch({
            type: 'FETCH_EVENTS' //grabs only uncompleted events
        })
    };//end componentDidMount

    delete=()=>{
         this.props.dispatch({
            type: "DELETE_EVENT",
            payload: this.props.item.id
          })
    } //end delete

    render() {
        return (
        <tr> 
            <td>{this.props.item.location}</td>
            <td>{this.props.item.timestamp}</td>
            <td>Materials</td>
            <td><EventsEdit/></td>
            <td><Button onClick={this.delete}>Delete</Button></td>
        </tr>

        );
    }
}

export default connect(mapStoreToProps)(EventsItem);