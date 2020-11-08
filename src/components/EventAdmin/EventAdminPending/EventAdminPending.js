import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import EventAdminPendingCard from './EventAdminPendingCard';
import './EventAdminPending.css';
// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class EventAdminPending extends Component {
    state = {
        heading: 'Pending',
    };

    render() {
        return (
            <div>
                <h2>{this.state.heading}</h2>
                {/* {JSON.stringify(this.props.store.drawing)} */}
                <div className="pendingGrid">
                    {this.props.store.drawing.map((drawing) => {
                        return (<EventAdminPendingCard drawing={drawing} />);
                    })}
                </div>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(EventAdminPending);