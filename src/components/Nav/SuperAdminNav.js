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


function SuperAdminNav(props) {

            const [anchorEl, setAnchorEl] = React.useState(null);

            const handleClick = (event) => {
              setAnchorEl(event.currentTarget);
            };

            const handleClose = () => {
              setAnchorEl(null);
            };
            
            const logout = () =>{
                props.dispatch({type:'LOGOUT'})
            }

            return (
                  <HashRouter>
                            <Paper square id="paper-div" variant="outlined" elevation={3}>
                                  <Tabs centered={true} value={false}>
                                          <Tab id="nav-tab-home" label="Home" component={Link} to="/home"/>
                                          <Tab id="nav-tab-user" label="Participants View" component={Link} to="/userhome"/>
                                          <Tab id="nav-tab-events" label="Events" onClick={handleClick}/>
                                                      <Menu anchorEl={anchorEl}
                                                              keepMounted
                                                              open={Boolean(anchorEl)}
                                                              onClose={handleClose}>
                                                          <Link className="nav-link-li" to="/events"><MenuItem onClick={handleClose}>Events</MenuItem></Link>
                                                          <Link className="nav-link-li" to="/allrequests"><MenuItem onClick={handleClose}>All Requests</MenuItem></Link>
                                                      </Menu>
                                          <Tab id="nav-tab-drawings" label="Drawings" component={Link} to="/drawings" />
                                          <Tab id="nav-tab-admin" label="Admin" component={Link} to="/admin"/>
                                          <Tab id="nav-tab-logout" label="Logout" component={Link} to="/home" onClick={logout}/>
                                  </Tabs>
                              </Paper>
                </HashRouter>
            )
}

export default connect(mapStoreToProps)(SuperAdminNav);