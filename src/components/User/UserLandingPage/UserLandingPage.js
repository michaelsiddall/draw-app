import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import '../UserStyles.css';
import Button from '@material-ui/core/Button';



import Footer from "../../Footer/Footer"
import Icon from '@material-ui/core/Icon';
import PublishIcon from '@material-ui/icons/Publish';
import ImageIcon from '@material-ui/icons/Image';
import Crayons from "../../../Images/RFreeCrayons.svg"
import Donate from "../../../Images/RFreeHeart.svg"
import "./UserLandingPage.css"


class UserLandingPage extends Component {
  state = {};

  // redirects User to Gallery Page displaying all approved images
  viewDrawing = () => {
    this.props.history.push('/gallery');
  };

  // redirects User to Submit Page allowing upload and submission of image for approval
  submitDrawing = () => {
    this.props.history.push('/submit');
  };

  // redirects User to Material Request Page allowing User to submit drawing materials
  requestMaterial = () => {
    this.props.history.push('/request');
  };

  render() {
    return (
      <div id="app-container">
      <div className="parentDiv">
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
          <div className="buttonDiv">
            <Button id="landingButton" size="large" onClick={this.requestMaterial}
            endIcon={<Icon><img src={Crayons} id="user-icon"/></Icon>}>
              Request Materials
           </Button>
          </div>

          <div className="buttonDiv">
            <Button id="landingButton" size="large" onClick={this.submitDrawing}
            endIcon={<PublishIcon/>}>
              Submit Drawing
          </Button>
          </div>

          <div className="buttonDiv">
            <Button id="landingButton" size="large" onClick={this.viewDrawing}
            endIcon={<ImageIcon/>}>
              View Drawings
          </Button>
          </div>

          <div className="buttonDiv">
            <a href='https://www.givemn.org/story/Draw' target='_blank'>
              <Button id="landingButton" size="large" 
              endIcon={<Icon ><img src={Donate} id="user-icon"/></Icon>}
              >Donate</Button>
            </a>

          </div>
        </div>
        <Footer />
      </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(UserLandingPage);
