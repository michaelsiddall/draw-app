import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import Input from '@material-ui/core/Input';
// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
import '../UserMaterialRequest/UserMaterialRequest.css';
import Swal from 'sweetalert2';
import ImageUpload from '../../ImageUpload/ImageUpload';

class UserDrawingSubmit extends Component {
  state = {
    drawingSubmit: {
      name: null,
      email: null,
      instagram: null,
      aboutDrawing: null,
      imageUrl: this.props.store.imageUrlReducer,
    },
  };

  onChange = (event, property) => {
    console.log('payload is', property, event.target.value);

    this.setState({
      drawingSubmit: {
        ...this.state.drawingSubmit,
        [property]: event.target.value,
      },
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    console.log('This is the materials request', this.state.drawingSubmit);
    Swal.fire({
      title: 'Are you sure your drawing is ready to submit?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#9dac68',
      cancelButtonColor: '#e26d5c',
      confirmButtonText: 'Yes, submit my drawing!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.props.dispatch({
          type: 'POST_DRAWING',
          payload: {
            name: this.state.drawingSubmit.name,
            email: this.state.drawingSubmit.email,
            instagram: this.state.drawingSubmit.instagram,
            aboutDrawing: this.state.drawingSubmit.aboutDrawing,
            imageUrl: this.props.store.imageUrlReducer,
          },
        });
        Swal.fire({
          title: "Thank you for helping Draw's cause!",
          showConfirmButton: false,
          timer: 3000,
        });
      }
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h5 className='centered'>Name</h5>
          <input
            className='inputCentered'
            type='text'
            placeholder='name'
            onChange={(event) => this.onChange(event, 'name')}
          ></input>
          <h5 className='centered'>
            Email (if you'd like to learn about future Draw events)
          </h5>
          <input
            className='inputCentered'
            type='text'
            placeholder='email'
            onChange={(event) => this.onChange(event, 'email')}
          ></input>
          <h5 className='centered'>
            Instagram Handle (if you'd like credit for your work if we post it!)
          </h5>
          <input
            className='inputCentered'
            type='text'
            placeholder='instagram handle'
            onChange={(event) => this.onChange(event, 'instagram')}
          ></input>
          <h5 className='centered'>
            About your drawing... add some info if you'd like!
          </h5>
          <input
            className='inputCentered'
            type='text'
            placeholder='about'
            onChange={(event) => this.onChange(event, 'aboutDrawing')}
          ></input>
          <br></br>
          <div className='inputCentered'>
            <ImageUpload />
          </div>

          <button type='submit' className='buttonCentered'>
            Submit Drawing!
          </button>
        </form>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(UserDrawingSubmit);
