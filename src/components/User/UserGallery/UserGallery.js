import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import UserGalleryCard from './UserGalleryCard';
import './UserGallery.css';
import HomeIcon from '@material-ui/icons/Home';
import { Select, MenuItem, InputLabel } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';


class UserGallery extends Component {
  state = {
    fetchEventDrawings: false,
  };

  componentDidMount = () => {
    console.log('in componentDidMount');
    this.props.dispatch({
      type: 'GET_APPROVED_DRAWINGS',
    });
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
    this.setState({
      fetchEventDrawings: true
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
          <ImageList variant="masonry" cols={3} gap={8}>
            {this.state.fetchEventDrawings ?
              this.props.store.eventDrawingByIdReducer.map((drawing) => {
                return <UserGalleryCard drawing={drawing} />;
              }) :
              this.props.store.approved.map((drawing) => {
                return <UserGalleryCard drawing={drawing} />;
              })}
          </ImageList>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(UserGallery);
