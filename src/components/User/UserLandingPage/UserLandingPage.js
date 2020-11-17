import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import drawlogo from '../DrawLogo.png';
import '../UserStyles.css';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        background: '#f9c74f',
        borderRadius: 3,
        border: 1,
        borderColor: '#90BE6D',
        color: '#577590',
        fontFamily: 'Work Sans',
        textTransform: 'none',
        height: 48,
        padding: '0 30px',
        //boxShadow: '0 3px 3px 2px #577590',
      },
    },
  },
});

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
      <div className="parentDiv">
        {/* <div className='drawLogo' maxWidth='med'>
          <img src={drawlogo} className='logo' alt='draw logo' />
        </div> */}
        <div >
          <h2 className='centered title'>About Draw</h2>
          <p className='copytext'>
            Draw is a community color therapy initiative inspired by Charles Moertel, who wanted to make a children’s book,
            but passed away before having the opportunity to achieve his goal.
          </p>
          <p className='copytext'>
            Draw partners with local organizations to host coloring days where people express creativity, share stories,
            and grow community by adding pages to the ever-growing children’s book.
        </p>
        </div>

        <div className="centered">
          <MuiThemeProvider theme={theme}>
            <div className="buttonDiv">
              <Button className='buttonCentered' size="large" onClick={this.requestMaterial}>
                Request Materials
           </Button>
            </div>

            <div className="buttonDiv">
              <Button className='buttonCentered' size="large" onClick={this.submitDrawing}>
                Submit Drawing
          </Button>
            </div>

            <div className="buttonDiv">
              <Button className='buttonCentered' size="large" onClick={this.viewDrawing}>
                View Drawings
          </Button>
            </div>

            <div className="buttonDiv">
              <a href='https://www.givemn.org/story/Draw' target='_blank'>
                <Button size="large" className='noUnderlineCentered'>
                  Donate to Draw!
            </Button>
              </a>
            </div>
          </MuiThemeProvider>
        </div>
      </div >
    );
  }
}

export default connect(mapStoreToProps)(UserLandingPage);
