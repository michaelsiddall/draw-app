import React from 'react';
import {HashRouter, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


function AdminNav(props) {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

            return (
                  <HashRouter>
                            <Paper square id="paper-div" variant="outlined" elevation={3}>
                                  <Tabs id="nav-tab" centered>
                                          <Tab label="Home" component={Link} to="/home"/>
                                          <Tab label="Gallery" component={Link} to="/gallery"/>
                                          <Tab label="Events" onClick={handleClick}/>
                                                      <Menu anchorEl={anchorEl}
                                                              keepMounted
                                                              open={Boolean(anchorEl)}
                                                              onClose={handleClose}>
                                                          <MenuItem component={Link} to="/events" onClick={handleClose}>Events</MenuItem> 
                                                          <MenuItem component={Link} to="/allrequests" onClick={handleClose}>All Requests</MenuItem>
                                                      </Menu>
                                          <Tab label="Drawings" component={Link} to="/drawings" />
                                          <Tab label="Logout" component={Link} to="/home" onClick={()=>props.dispatch({type:'LOGOUT'})}/>
                                  </Tabs>
                              </Paper>
                </HashRouter>
            )
}

export default connect(mapStoreToProps)(AdminNav);