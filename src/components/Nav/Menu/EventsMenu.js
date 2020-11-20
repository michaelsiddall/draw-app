import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Tab from '@material-ui/core/Tab';
import { Link} from 'react-router-dom';
import "../Nav.css"
import "./Menu.css"

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
                                                            PaperProps={{square:true, style: {backgroundColor: `#e4e4e4ea`}}}
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
                                                          <MenuItem id="nav-menu-item-events" component={Link} to="/events" onClick={handleClose}>Events</MenuItem> 
                                                          <MenuItem id="nav-menu-item-events" component={Link} to="/allrequests" onClick={handleClose}>All Requests</MenuItem>
                                                      </Menu>
                                            </>
                                    );
}

export default connect(mapStoreToProps)(EventsMenu);
