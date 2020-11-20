import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Swal from 'sweetalert2';

import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
//import ImageListItem from '@material-ui/core';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class EventAdminDrawingsCard extends Component {
  state = {
    isClicked: true,
  };
  //when image is clicked, state is updated to its current opposite
  clickText = () => {
    console.log('showing text');
    this.setState({
      isClicked: !this.state.isClicked,
    });
  };

  infoClick = () => {

    Swal.fire({
      title: `drawing by ${this.props.drawing.name}`,
      text: this.props.drawing.description,
      imageUrl: this.props.drawing.image_url,
      imageAlt: 'drawing',
    });
  }

  render() {
    return (
      <div>
        <ImageListItem key={this.props.drawing.id}>
          <img src={this.props.drawing.image_url} alt='drawing' />
          <ImageListItemBar position="below"
            title={this.props.drawing.name}
            subtitle={this.props.drawing.description}


            actionIcon={
              <IconButton
                aria-label={`click for info`}
                onClick={this.infoClick}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      </div >
    );
  }
}

export default connect(mapStoreToProps)(EventAdminDrawingsCard);
