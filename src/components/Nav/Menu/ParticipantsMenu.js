import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Tab from '@material-ui/core/Tab';
import { Link} from 'react-router-dom';
import "../Nav.css"
import "./Menu.css"


function ParticipantsMenu(props) {

    const [anchorEl, setAnchorEl] = useState(null);

          const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
          };

          const handleClose = () => {
            setAnchorEl(null);
          };


                        return (
                                            <>
                                                <Tab id="nav-tab-user" label="Participants View" onClick={handleClick}/>
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

                                                            <MenuItem id="nav-menu-item" component={Link} to="/userhome" target="_blank" onClick={handleClose}>User Home</MenuItem>
                                                            <MenuItem id="nav-menu-item" component={Link} to="/submit" target="_blank" onClick={handleClose}>User Submit</MenuItem>
                                                            <MenuItem id="nav-menu-item" component={Link} to="/request" target="_blank" onClick={handleClose}>User Request</MenuItem> 
                                                            <MenuItem id="nav-menu-item" component={Link} to="/gallery" target="_blank" onClick={handleClose}>User Gallery</MenuItem>   
                                                      </Menu>
                                            </>
                                    );
}

export default connect(mapStoreToProps)(ParticipantsMenu);