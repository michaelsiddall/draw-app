import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import Button from '@material-ui/core/Button';
import '../UserStyles.css';
import HomeIcon from '@material-ui/icons/Home';
import TextField from '@material-ui/core/TextField';
// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
import '../UserMaterialRequest/UserMaterialRequest.css';
import Swal from 'sweetalert2';
import ImageUpload from '../../ImageUpload/ImageUpload';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

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

class UserDrawingSubmit extends Component {
    state = {
        drawingSubmit: {
            name: null,
            email: null,
            instagram: null,
            aboutDrawing: null,
            imageUrl: null,
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

    goHome = () => {
        this.props.history.push('/userhome');
    };

    onSubmit = (event) => {
        event.preventDefault();
        console.log('This is the materials request', this.state.drawingSubmit);
        if (this.props.store.imageUrlReducer === null) {
            Swal.fire(
                'Hold on!',
                'Please upload a drawing file.',
                'warning'
            )
        } //This check is not working and I can't figure out why.........
        //It never hits this if statement even though I'm unsetting the image url in the reducer
        //Every time there is a successful image upload.
        else {
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
                    this.props.history.push('/userhome');
                    this.props.dispatch({ type: 'UNSET_IMAGE_URL' });
                }
            });
        }


    };

    render() {
        return (
            <div className="centered">
                <MuiThemeProvider theme={theme}>

                    <HomeIcon
                        fontSize="large"
                        style={{ color: '#577590' }}
                        onClick={this.goHome}
                    />
                    <h2 className='title'>Submit Drawing !</h2>

                    <form onSubmit={this.onSubmit} className="centered">
                        <div className='centered'>
                            <h5 className='smallerTitle'>Name</h5>
                            <TextField
                                type='text'
                                placeholder='name'
                                onChange={(event) => this.onChange(event, 'name')}
                            ></TextField>
                        </div>

                        <div className='centered'>
                            <h5 className='smallerTitle'>
                                Email
                            </h5>
                            <TextField
                                helperText="If you'd like to learn about future Draw events"

                                type='text'
                                placeholder='email'
                                onChange={(event) => this.onChange(event, 'email')}
                            ></TextField>
                        </div>

                        <div className='centered'>
                            <h5 className='smallerTitle'>
                                Instagram Handle
                        </h5>
                            <TextField
                                helperText="We'll credit you if we post your art!"
                                type='text'
                                placeholder='instagram handle'
                                onChange={(event) => this.onChange(event, 'instagram')}
                            ></TextField>
                        </div>
                        <div className='centered'>
                            <h5 className='smallerTitle'>
                                About your drawing
                        </h5>
                            <TextField
                                multiline={true}
                                helperText="Add whatever background you like!"
                                type='text'
                                placeholder='about'
                                onChange={(event) => this.onChange(event, 'aboutDrawing')}
                            ></TextField>
                        </div>

                        <br></br>
                        <div className='centered'>
                            <ImageUpload />
                        </div>
                        <div className='submitBtn'>
                            <Button type='submit' className='buttonCentered'>
                                Submit Drawing!
                            </Button>
                        </div>

                    </form>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(UserDrawingSubmit);
