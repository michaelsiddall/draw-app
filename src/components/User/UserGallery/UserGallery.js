import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import UserGalleryCard from './UserGalleryCard';
import './UserGallery.css';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class UserGallery extends Component {
    state = {
        heading: 'Gallery',
    };

    componentWillMount() {
        this.props.dispatch({ type: 'GET_APPROVED_DRAWINGS' });


    }

    render() {
        return (
            <div>
                <h2>{this.state.heading}</h2>
                <div className="pendingGrid">
                    {this.props.store.approved.map((drawing) => {
                        return (<UserGalleryCard drawing={drawing} />);
                    })}
                </div>
            </div >
        );
    }
}

export default connect(mapStoreToProps)(UserGallery);