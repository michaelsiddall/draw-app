import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import UserGalleryCard from './UserGalleryCard';
import './UserGallery.css';
import HomeIcon from '@material-ui/icons/Home';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class UserGallery extends Component {


    componentWillMount() {
        this.props.dispatch({ type: 'GET_APPROVED_DRAWINGS' });


    }
    goHome = () => {
        this.props.history.push('/userhome');
    };

    render() {
        return (
            <div className="centered">
                <HomeIcon
                    fontSize="large"
                    style={{ color: '#577590' }}
                    onClick={this.goHome}
                />
                <h2 className='title'>Gallery</h2>
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