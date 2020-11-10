import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';
import { HashRouter, Link } from 'react-router-dom';


import EventComplete from "../EventComplete/EventComplete";
import EventEdit from "../EventEdit/EventEdit";


//materialUI and styling
import Button from '@material-ui/core/Button';
import "./EventItem.css"


class EventItem extends Component {
            componentDidMount=()=>{
                this.props.dispatch({
                    type: 'FETCH_EVENTS' //grabs only uncompleted events
                })
            };//end componentDidMount


    render() {
        return (
            <HashRouter>
                    <tr> 
                        <td>{this.props.item.location}</td>
                        <td>{this.props.item.timestamp}</td>
                        <td><Link to="/request/:id"><Button>Queue</Button></Link></td>
                        <td><EventEdit
                                matchID={this.props.item.id}
                                item={this.props.item}
                        /></td>
                        <td><EventComplete/></td>
                    </tr>
            </HashRouter>
        );
    }
}

export default connect(mapStoreToProps)(EventItem);