import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Nav from '../Nav/Nav';
import "./Welcome.css"
import MailIcon from '@material-ui/icons/Mail';
import {
  HashRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';


class Welcome extends Component {

    mail = () =>{
    window.open('mailto:steve@drawbyyou.com','_blank');
  }

  render() {
            if (this.props.store.user.auth_level==="user"){
              return (
                <div className="welcome-div">
                  <div className="transluscent-welcome">
                  <Nav/>
                        <div id="user-page-container">
                                  <h1 className="user-page-h1">Welcome, {this.props.store.user.username}!</h1>
                                  <p className="user-page-p">Your ID is: {this.props.store.user.id}</p>
                                  <p>Authorization Level: User</p>
                                  <p> Please speak to the site administrator about getting more access!</p>
                                  <p>{<MailIcon id="welcome-mail-icon" onClick={this.mail}/>}</p>
                        </div>
                    </div>
                </div>
              )
            }

            else if (this.props.store.user.auth_level==="admin"){
              return (
                <Switch>
                  <Redirect exact from='/welcome' to='/events' />
                </Switch>
              )
            }

            else if (this.props.store.user.auth_level==="superAdmin"){
              return (
                <Switch>
                  <Redirect exact from='/welcome' to='/events' />
                </Switch>
              )
            }

  }
}


export default connect(mapStoreToProps)(Welcome);
