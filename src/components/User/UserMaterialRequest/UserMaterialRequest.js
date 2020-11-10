import React, { Component } from 'react';
import { connect } from 'react-redux';

import mapStoreToProps from '../../../redux/mapStoreToProps';
import './UserMaterialRequest.css';

class UserMaterialRequest extends Component {
  state = {
    materialRequest: {
      location: null,
      tableNumber: null,
      artistNumber: null,
    },
  };

  componentDidMount = () => {
    console.log('in componentDidMount');
    this.props.dispatch({
      type: 'FETCH_EVENTS',
    });
  };

  onChange = (event, property) => {
    console.log('payload is', property, event.target.value);
    this.setState({
      materialRequest: {
        ...this.state.materialRequest,
        [property]: event.target.value,
      },
    });
  };

  onSubmit = () => {
    console.log('This is the materials request', this.state.materialRequest);

    this.props.dispatch({
      type: 'ADD_REQUEST',
      payload: this.state.materialRequest,
    });
  };

  render() {
    console.log('redux state is', this.props.store);
    return (
      <div>
        <h2 className='centered'>Material Request</h2>

        <h5 className='centered'>Location</h5>
        <select
          className='selectCentered'
          defaultValue={'DEFAULT'}
          onChange={(event) => this.onChange(event, 'location')}
        >
          <option value='DEFAULT' disabled>
            Select Event
          </option>
          {this.props.store.eventsReducer.map((event) => {
            return (
              <option key={event.id} value={event.id}>
                {event.location}
              </option>
            );
          })}
        </select>

        <h5 className='centered'>Table Number</h5>
        <input
          className='inputCentered'
          type='number'
          placeholder='Select a Table'
          min='1'
          max='99'
          onChange={(event) => this.onChange(event, 'tableNumber')}
        ></input>

        <h5 className='centered'>Number of Artists</h5>
        <input
          className='inputCentered'
          type='number'
          placeholder='Select a Number'
          min='1'
          max='15'
          onChange={(event) => this.onChange(event, 'artistNumber')}
        ></input>
        <br></br>
        <button className='buttonCentered' onClick={this.onSubmit}>
          Request Drawing Materials
        </button>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(UserMaterialRequest);
