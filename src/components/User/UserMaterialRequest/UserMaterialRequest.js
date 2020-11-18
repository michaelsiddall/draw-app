import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import HomeIcon from '@material-ui/icons/Home';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import './UserMaterialRequest.css';
import Swal from 'sweetalert2';
import '../UserStyles.css';
import { InputLabel, MenuItem } from '@material-ui/core';

const theme = createMuiTheme({
    overrides: {
        MuiButton: {
            // Name of the rule
            text: {
                // Some CSS
                background: '#f9844a',
                borderRadius: 3,
                border: 1,
                borderColor: '#90BE6D',
                color: 'white',
                fontFamily: 'Work Sans',
                textTransform: 'none',
                height: 48,
                padding: '0 30px',
                //boxShadow: '0 3px 3px 2px #577590',
            },
        },
    },
});

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

    goHome = () => {
        this.props.history.push('/userhome');
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
    };
    render() {
        console.log('redux state is', this.props.store);
        return (
            <form className="centered">
                <MuiThemeProvider theme={theme}>
                    <HomeIcon
                        fontSize="large"
                        style={{ color: '#577590' }}
                        onClick={this.goHome}
                    />
                    <h2 className='title'>Get Drawing Materials!</h2>
                    <div className='centered'>
                        <h5 className='smallerTitle'>Location</h5>
                        <InputLabel id="location">Where is your event?</InputLabel>
                        <Select
                            required
                            id="location"
                            defaultValue={''}
                            style={{ minWidth: 200 }}
                            onChange={(event) => this.onChange(event, 'location')}
                        >
                            <MenuItem value='' disabled>
                                Select Event </MenuItem>
                            {this.props.store.eventReducer.map((event) => {
                                return (
                                    <MenuItem key={event.id} value={event.id}>
                                        {event.location}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </div>

                    <div className='centered'>
                        <h5 className='centered smallerTitle'>Table Number</h5>
                        <Input
                            style={{ minWidth: 200 }}
                            type='number'
                            placeholder='Table Number'
                            onChange={(event) => this.onChange(event, 'tableNumber')}
                            required
                        ></Input>
                    </div>

                    <div className='centered'>
                        <h5 className='smallerTitle'>Number of Participants</h5>
                        <Input
                            style={{ minWidth: 200 }}

                            type='number'
                            placeholder='Select a Number'
                            onChange={(event) => this.onChange(event, 'artistNumber')}
                            required
                        ></Input>
                    </div>
                    <div className='submitBtn'>
                        <Button className='buttonCentered' size="large" onClick={this.onSubmit}>
                            Request Drawing Materials
                    </Button>

                    </div>

                </MuiThemeProvider>
            </form>
        );
    }
}

export default connect(mapStoreToProps)(UserMaterialRequest);
