import React from 'react';
import { connect } from 'react-redux';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withRouter } from "react-router";
import AboutMenu from './Menu/AboutMenu';
import ParticipantsMenu from './Menu/ParticipantsMenu';


function UserNav(props) {

            const logout = () =>{
                props.dispatch({type:'LOGOUT'})
                props.history.push("/login")
            }
            
            return (
                            <Paper square id="paper-div" variant="outlined" elevation={3}>
                                  <Tabs centered={true} value={false}>
                                          <AboutMenu/>
                                          <ParticipantsMenu/>
                                          <Tab id="nav-tab-logout" label="Logout" onClick={logout}/>
                                  </Tabs>
                              </Paper>
            );
}

export default withRouter(connect(mapStoreToProps)(UserNav));
