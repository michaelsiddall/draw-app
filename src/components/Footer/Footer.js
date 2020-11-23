import React, { Component } from 'react';
import { connect } from 'react-redux';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import Donate from "../../Images/RFreeHeart.svg"
import mapStoreToProps from '../../redux/mapStoreToProps';
import "./Footer.css"
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';


class Footer extends Component {

  facebook = () => {
    window.open('https://www.facebook.com/drawbyyou', '_blank');
  }

  mail = () => {
    window.open('mailto:steve@drawbyyou.com', '_blank');
  }

  instagram = () => {
    window.open('https://www.instagram.com/draw_by_you/', '_blank');
  }

  donate = () => {
    window.open('https://www.givemn.org/story/Draw', '_blank');
  }


  render() {
    return (
      <BottomNavigation showLabels={true} id="footer-container">
        <BottomNavigationAction id="bottom-nav" icon={<FacebookIcon id="footer-icon" />} label="Facebook" onClick={this.facebook}></BottomNavigationAction>
        <BottomNavigationAction id="bottom-nav" icon={<InstagramIcon id="footer-icon" />} label="Instagram" onClick={this.instagram}></BottomNavigationAction>
        <BottomNavigationAction id="bottom-nav" icon={<Icon ><img src={Donate} id="user-icon"/></Icon>} label="Donate" onClick={this.donate}></BottomNavigationAction>
        <BottomNavigationAction id="bottom-nav" icon={<HomeIcon id="footer-icon" />} label="Home" component={Link} to="/userhome"></BottomNavigationAction>
      </BottomNavigation>
    );
  }
}

export default connect(mapStoreToProps)(Footer);
