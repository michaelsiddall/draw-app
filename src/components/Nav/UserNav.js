import React from 'react';
import {HashRouter, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


function UserNav(props) {


            return (
                  <HashRouter>
                            <Paper square id="paper-div" variant="outlined" elevation={3}>
                                  <Tabs indicatorColor="primary" id="nav-tab" centered>
                                          <Tab id="nav-tab-home" className="nav-tab" label="Home" component={Link} to="/home"/>
                                          <Tab id="nav-tab-logout" className="nav-tab" label="Logout" onClick={()=>props.dispatch({type:'LOGOUT'})}/>
                                  </Tabs>
                              </Paper>
                </HashRouter>
            );
}

export default connect(mapStoreToProps)(UserNav);