import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

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
        <h2 className='centered'>About Draw</h2>
        <p>
          Lorem ipsum dolor sit amet, causae voluptua sed ex, nonumy labitur
          erroribus pro id. Intellegat concludaturque an mel, quas dicunt
          persius ei nec. Ei viris affert ocurreret vel. An aliquip deterruisset
          eum, at eos idque blandit commune. Percipit erroribus elaboraret et
          eam.
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
