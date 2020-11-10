import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import EventAdminDrawingsCard from './EventAdminDrawingsCard';
import './EventAdminDrawings.css';
// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class EventAdminDrawings extends Component {
    state = {
        heading: 'Drawings',
        data: null
    };

    componentDidMount() {
        this.loadData().then(data =>
            this.setState({ data: data }))

    }

    async loadData() {
        this.props.dispatch({ type: 'GET_DRAWINGS' });

    }

    render() {
        if (this.state.data === null) {
            return <div><h1>loading...</h1></div>
        }
        return (
            <div>
                <h2>{this.state.heading}</h2>
                {/* {JSON.stringify(this.props.store.drawing)} */}
                <div className="pendingGrid">
                    {this.props.store.drawing.map((drawing) => {
                        return (<EventAdminDrawingsCard drawing={drawing} />);
                    })}
                </div>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(EventAdminDrawings);