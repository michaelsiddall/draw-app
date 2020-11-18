import React, { Component } from 'react';
import { connect } from 'react-redux';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailIcon from '@material-ui/icons/Mail';
import mapStoreToProps from '../../redux/mapStoreToProps';
import "./Footer.css"
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';



class Footer extends Component {

  render() {
    return (
      <BottomNavigation id="footer-container">
           <a href="https://www.facebook.com/drawbyyou" target="_blank" rel="noopener noreferrer"><BottomNavigationAction icon={<FacebookIcon id="footer-icon"/>}></BottomNavigationAction></a> 
          <a href="mailto:steve@drawbyyou.com" target="_blank" rel="noopener noreferrer"><BottomNavigationAction icon={<MailIcon id="footer-icon"/>}></BottomNavigationAction></a>
           <a href="https://www.instagram.com/draw_by_you/" target="_blank" rel="noopener noreferrer"><BottomNavigationAction icon={<InstagramIcon id="footer-icon"/>}></BottomNavigationAction></a> 
      </BottomNavigation>
    );
  }
}

export default connect(mapStoreToProps)(Footer);
