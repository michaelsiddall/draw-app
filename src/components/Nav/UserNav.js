import React from 'react';
import {HashRouter, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


function UserNav(props) {

            const logout = () =>{
                props.dispatch({type:'LOGOUT'})
            }
            
            return (
                  <HashRouter>
                            <Paper square id="paper-div" variant="outlined" elevation={3}>
                                  <Tabs id="nav-tab" centered={true} value={false}>
                                          <Tab id="nav-tab-home" label="Home" component={Link} to="/home"/>
                                          <Tab id="nav-tab-logout" label="Logout" component={Link} to="/home" onClick={logout}/>
                                  </Tabs>
                              </Paper>
                </HashRouter>
            );
}

export default connect(mapStoreToProps)(UserNav);


//https://reactjs.org/warnings/unknown-prop.html