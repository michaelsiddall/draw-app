import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import drawlogo from '../DrawLogo.png';
import '../UserStyles.css';
import Button from '@material-ui/core/Button';

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
        <div className='drawLogo'>
          <img src={drawlogo} alt='draw logo' />
        </div>
        <div className='copytext'>
          <h2 className='centered'>About Draw</h2>
          <p>
            Draw is a community color therapy initiative inspired by Charles Moertel, who wanted to make a children’s book,
            but passed away before having the opportunity to achieve his goal.
        </p>
          <p>
            Draw partners with local organizations to host coloring days where people express creativity, share stories,
            and grow community by adding pages to the ever-growing children’s book.
        </p>
        </div>

        <div className="centered">
          <div className="buttonDiv">
            <Button variant="contained" className='buttonCentered' size="large" onClick={this.requestMaterial}>
              Request Materials
           </Button>
          </div>

          <div className="buttonDiv">
            <Button variant="contained" className='buttonCentered' size="large" onClick={this.submitDrawing}>
              Submit Drawing
          </Button>
          </div>

          <div className="buttonDiv">
            <Button variant="contained" className='buttonCentered' size="large" onClick={this.viewDrawing}>
              View Drawings
          </Button>
          </div>

          <div className="buttonDiv">
            <a href='https://www.givemn.org/story/Draw' target='_blank'>
              <Button variant="contained" size="large" className='noUnderlineCentered'>
                Donate to Draw!
            </Button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(UserLandingPage);
