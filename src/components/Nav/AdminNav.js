import React from 'react';
import {HashRouter, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withRouter } from "react-router";

function AdminNav(props) {
          const [anchorEl, setAnchorEl] = React.useState(null);

          const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
          };

          const handleClose = () => {
            setAnchorEl(null);
          };

          const logout = () =>{
              props.dispatch({type:'LOGOUT'})
              props.history.push("/login")
          }


  console.log("PROPS", props)

            return (
                  <HashRouter>
                            <Paper square id="paper-div" variant="outlined" elevation={3}>
                                  <Tabs id="nav-tab" centered={true} value={false} >
                                          <Tab id="nav-tab-home" label="Home" component={Link} to="/home"/>
                                          <Tab id="nav-tab-user" label="Participants View" component={Link} to="/userhome"/>
                                          <Tab id="nav-tab-events" label="Events" onClick={handleClick}/>
                                                      <Menu anchorEl={anchorEl}
                                                              keepMounted
                                                              id="nav-menu"
                                                              open={Boolean(anchorEl)}
                                                              onClose={handleClose}
                                                              anchorOrigin={{
                                                                  vertical: 'bottom',
                                                                  horizontal: 'center',
                                                                }}
                                                              transformOrigin={{
                                                                  vertical: 'top',
                                                                  horizontal: 'center',
                                                                }}
                                                              getContentAnchorEl={null}
                                                              elevation={0}>
                                                          <MenuItem component={Link} to="/events" onClick={handleClose}>Events</MenuItem> 
                                                          <MenuItem component={Link} to="/allrequests" onClick={handleClose}>All Requests</MenuItem>
                                                      </Menu>
                                          <Tab id="nav-tab-drawings" label="Drawings" component={Link} to="/drawings" />
                                          <Tab id="nav-tab-logout" label="Logout" onClick={logout}/>
                                  </Tabs>
                              </Paper>
                </HashRouter>
            )
}

export default withRouter(connect(mapStoreToProps)(AdminNav));