import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';
import EventsEdit from "../EventsEdit/EventsEdit";

class EventsItem extends Component {

    delete=()=>{
         this.props.dispatch({
            type: "DELETE_EVENT",
            payload: this.props.item.id
          })
          window.location.reload();
    } //end delete

    render() {
        return (
        <tr> 
            <td>{this.props.item.location}</td>
            <td>{this.props.item.timestamp}</td>
            <td>{this.props.item.materials}</td>
            <td><EventsEdit/></td>
            <td><Button onClick={this.delete}>Delete</Button></td>
        </tr>

        );
    }
}

export default connect(mapStoreToProps)(EventsItem);