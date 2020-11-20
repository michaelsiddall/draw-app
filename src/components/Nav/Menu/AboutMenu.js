import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Tab from '@material-ui/core/Tab';
import { Link} from 'react-router-dom';
import "../Nav.css"

function AboutMenu(props) {

    const [anchorEl, setAnchorEl] = useState(null);

          const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
          };

          const handleClose = () => {
            setAnchorEl(null);
          };

          const facebook = ()=>{
              setAnchorEl(null);
              window.open('https://www.facebook.com/drawbyyou','_blank');
            }
          const mail = () =>{
              setAnchorEl(null);
              window.open('mailto:steve@drawbyyou.com','_blank');
            }

          const instagram = () =>{
              setAnchorEl(null);
              window.open('https://www.instagram.com/draw_by_you/','_blank');
            }

          const donate = () =>{
              setAnchorEl(null);
              window.open('https://www.givemn.org/story/Draw','_blank');
            }

                        return (
                                            <>
                                                <Tab id="nav-tab-about" label="About" onClick={handleClick}/>
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
                                                            <MenuItem component={Link} to="/about" onClick={handleClose}>About</MenuItem>
                                                            <MenuItem component={Link} to="/welcome" onClick={handleClose}>Account</MenuItem>  
                                                            <MenuItem onClick={mail}>Contact Admin</MenuItem>
                                                            <MenuItem onClick={facebook}>Facebook</MenuItem>
                                                            <MenuItem onClick={instagram}>Instagram</MenuItem>
                                                            <MenuItem onClick={donate}>Donation Page</MenuItem>
                                                      </Menu>
                                            </>
                                    );
}

export default connect(mapStoreToProps)(AboutMenu);
