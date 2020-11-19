import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import UserGalleryCard from './UserGalleryCard';
import './UserGallery.css';
import HomeIcon from '@material-ui/icons/Home';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Select, MenuItem, InputLabel } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
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
  componentDidMount = () => {
    console.log('in componentDidMount');
    this.props.dispatch({
      type: 'FETCH_EVENTS',
    });
  };

  onChange = (event) => {
    console.log('payload is', event.target.value);
    this.props.dispatch({
      type: 'FETCH_APPROVED_EVENT_DRAWINGS',
      url: `/api/drawing/approved/${event.target.value}`,
    });
  };

  goHome = () => {
    this.props.history.push('/userhome');
  };

  render() {
    return (
      <div className='centered'>
        <HomeIcon
          fontSize='large'
          style={{ color: '#577590' }}
          onClick={this.goHome}
        />
        <h2 className='title'>Gallery</h2>
        <FormControl>


          <InputLabel id="gallery-select">Select Event</InputLabel>
          <Select
            required
            id="gallery-select"
            style={{ width: 200 }}
            defaultValue={''}
            onChange={(event) => this.onChange(event)}
            placeholder='Select Event'
          >
            <MenuItem value='' disabled>
              Select Event
          </MenuItem>

            {this.props.store.eventReducer.map((event) => {
              return (
                <MenuItem key={event.id} value={event.id}>
                  {event.location}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <div className='pendingGrid'>
          <GridList cellHeight={300} cols='2'>
            {this.props.store.eventDrawingByIdReducer.map((drawing) => {
              return <UserGalleryCard drawing={drawing} />;
            })}
          </GridList>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(UserGallery);
