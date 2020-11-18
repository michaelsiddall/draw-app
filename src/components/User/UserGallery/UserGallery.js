import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import UserGalleryCard from './UserGalleryCard';
import './UserGallery.css';
import HomeIcon from '@material-ui/icons/Home';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
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
                    <GridList cellHeight={180}>


                        {this.props.store.approved.map((drawing) => {
                            return (
                                <GridListTile key={drawing.id}>
                                    <img src={drawing.image_url} alt="drawing" />
                                    <GridListTileBar
                                        title={drawing.name}
                                        subtitle={<span> {drawing.about}</span>}
                                        actionIcon={
                                            <IconButton aria-label={`info`} >
                                                <InfoIcon />
                                            </IconButton>
                                        }
                                    />
                                </GridListTile>
                            );


                            // return (<UserGalleryCard drawing={drawing} />);
                        })}
                    </GridList>
                </div>
            </div >
        );
    }
}

export default connect(mapStoreToProps)(UserGallery);