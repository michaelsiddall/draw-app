import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import drawlogo from '../DrawLogo.png';
// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class UserLandingPage extends Component {
  state = {};

  viewDrawing = () => {
    this.props.history.push('/gallery');
  };

  submitDrawing = () => {
    this.props.history.push('/submit');
  };
  requestMaterial = () => {
    this.props.history.push('/request');
  };

  render() {
    return (
      <div>
        <img src={drawlogo} alt='draw logo' />
        <h2 className='centered'>About Draw</h2>
        <p>
          Draw is a community color therapy initiative inspired by Charles Moertel, who wanted to make a children’s book, but passed away before having the opportunity to achieve his goal

          Draw partners with local organizations to host coloring days where people express creativity, share stories, and grow community by adding pages to the ever-growing children’s book.

        </p>
        <div>
          <button className='buttonCentered' onClick={this.viewDrawing}>
            View Drawings
          </button>
          <br></br>
          <button className='buttonCentered' onClick={this.submitDrawing}>
            Submit Drawing
          </button>
          <br></br>
          <button className='buttonCentered' onClick={this.requestMaterial}>
            Request Materials
          </button>
          <br></br>

          <a href='https://www.givemn.org/story/Draw' target='_blank'>
            <button className='noUnderlineCentered'>Donate to Draw!</button>
          </a>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(UserLandingPage);
