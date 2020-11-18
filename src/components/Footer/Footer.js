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
  
  facebook = ()=>{
    window.open('https://www.facebook.com/drawbyyou','_blank');
  }

  mail = () =>{
    window.open('mailto:steve@drawbyyou.com','_blank');
  }

  instagram = () =>{
    window.open('https://www.instagram.com/draw_by_you/','_blank');
  }

  render() {
    return (
      <BottomNavigation id="footer-container">
            <BottomNavigationAction id="bottom-nav" icon={<FacebookIcon id="footer-icon"/>} onClick={this.facebook}></BottomNavigationAction>
            <BottomNavigationAction id="bottom-nav" icon={<MailIcon id="footer-icon"/>} onClick={this.mail}></BottomNavigationAction>
            <BottomNavigationAction id="bottom-nav" icon={<InstagramIcon id="footer-icon"/>} onClick={this.instagram}></BottomNavigationAction>
      </BottomNavigation>
    );
  }
}

export default connect(mapStoreToProps)(Footer);
