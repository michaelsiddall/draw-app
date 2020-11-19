import React from 'react';
import {HashRouter, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';


function UserNav(props) {


            return (
                  <HashRouter>
                            <Paper square id="paper-div" variant="outlined" elevation={3}>
                                  <Tabs indicatorColor="primary" id="nav-tab" centered>
                                          <Tab label="Home" component={Link} to="/home"/>
                                          <Tab label="Gallery" component={Link} to="/gallery"/>
                                          <Tab label="Logout" component={Link} to="/home" onClick={()=>props.dispatch({type:'LOGOUT'})}/>
                                  </Tabs>
                              </Paper>
                </HashRouter>
            );
}

export default connect(mapStoreToProps)(UserNav);