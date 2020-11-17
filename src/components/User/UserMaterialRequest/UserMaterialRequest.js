import React, { Component } from 'react';
import { connect } from 'react-redux';

import mapStoreToProps from '../../../redux/mapStoreToProps';
import './UserMaterialRequest.css';
import Swal from 'sweetalert2';

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

    onSubmit = (event) => {
        event.preventDefault();
        console.log('This is the materials request', this.state.materialRequest);
        if (
            this.state.materialRequest.location !== null &&
            this.state.materialRequest.tableNumber !== null &&
            this.state.materialRequest.artistNumber !== null
        ) {
            Swal.fire({
                title: 'Are you ready to submit your materials request?',
                // text: this.state.materialRequest.location,
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#9dac68',
                cancelButtonColor: '#e26d5c',
                confirmButtonText: 'Yes, send request!',
            }).then((result) => {
                if (result.isConfirmed) {
                    this.props.dispatch({
                        type: 'ADD_REQUEST',
                        payload: this.state.materialRequest,
                    });
                    Swal.fire({
                        title: 'Drawing materials will be delivered to your table shortly!',
                        showConfirmButton: false,
                        timer: 3000,
                    });
                    this.props.history.push('/userhome');

                }
            });

        }
     else {
      Swal.fire({
        title: 'Please fill out all fields',
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };
  render() {
    console.log('redux state is', this.props.store);
    return (
      <form>
        <h2 className='centered'>Material Request</h2>

                <h5 className='centered'>Location</h5>
                <select
                    required
                    className='selectCentered'
                    defaultValue={''}
                    onChange={(event) => this.onChange(event, 'location')}
                >
                    <option value='' disabled>
                        Select Event
          </option>

                    <option value='1' >event 1</option>
                    <option value='2' >event 2</option>
                    {this.props.store.eventReducer.map((event) => {
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
                    required
                ></input>

                <h5 className='centered'>Number of Artists</h5>
                <input
                    className='inputCentered'
                    type='number'
                    placeholder='Select a Number'
                    min='1'
                    max='15'
                    onChange={(event) => this.onChange(event, 'artistNumber')}
                    required
                ></input>
                <br></br>
                <button className='buttonCentered' onClick={this.onSubmit}>
                    Request Drawing Materials
        </button>
            </form>
        );
    }
}

export default connect(mapStoreToProps)(UserMaterialRequest);
