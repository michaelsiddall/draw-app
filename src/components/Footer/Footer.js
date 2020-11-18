import React, { Component } from 'react';
import { connect } from 'react-redux';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailIcon from '@material-ui/icons/Mail';
import mapStoreToProps from '../../redux/mapStoreToProps';
import "./Footer.css"




class Footer extends Component {

  render() {
    return (
      <div id="footer-container">
            <a href="https://www.facebook.com/drawbyyou" target="_blank" rel="noopener noreferrer"><FacebookIcon id="footer-icon"/></a>
            <a href="mailto:steve@drawbyyou.com" target="_blank" rel="noopener noreferrer"><MailIcon id="footer-icon"/></a>
            <a href="https://www.instagram.com/draw_by_you/" target="_blank" rel="noopener noreferrer"><InstagramIcon id="footer-icon"/></a> 
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Footer);
