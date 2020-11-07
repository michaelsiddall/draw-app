import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';
import EventsEdit from "../EventsEdit/EventsEdit";

class EventsItem extends Component {
    state={
        hide: false
    }
    toggleHidden=()=>{
        this.setState({
            hide: !this.state.hide
        })
    } //end toggleHidden

    render() {
        return (
        <tr> 
            <td>{this.props.item.location}</td>
            <td>{this.props.item.timestamp}</td>
            <td>{this.props.item.materials}</td>
            <td><EventsEdit/></td>
            <td><Button onClick={this.toggleHidden} id={this.state.hide ? "hide-me":""}>Hide</Button></td>
        </tr>

        );
    }
}

export default connect(mapStoreToProps)(EventsItem);