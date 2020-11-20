import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Tab from '@material-ui/core/Tab';
import { Link} from 'react-router-dom';
import "../Nav.css"


function EventsMenu(props) {

    const [anchorEl, setAnchorEl] = useState(null);

          const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
          };

          const handleClose = () => {
            setAnchorEl(null);
          };


                        return (
                                            <>
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
                                            </>
                                    );
}

export default connect(mapStoreToProps)(EventsMenu);
