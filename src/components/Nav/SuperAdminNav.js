import React from 'react';
import {HashRouter, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


function SuperAdminNav(props) {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

            return (
                  <HashRouter>
                        <h2 className="nav-title">Draw</h2>
                            <div className="nav-div">
                                <ul className="nav-list">
                                    <li className ="inline-li"><Link className="nav-link-li" to="/home">Home</Link></li>
                                    <li className ="inline-li"><Link className="nav-link-li" to="/gallery">Gallery</Link></li>
                                    <li className ="inline-li" onClick={handleClick}>Events
                                            <Menu anchorEl={anchorEl}
                                                    keepMounted
                                                    open={Boolean(anchorEl)}
                                                    onClose={handleClose}>
                                                <Link className="nav-link-li" to="/events"><MenuItem onClick={handleClose}>Events</MenuItem></Link>
                                                <Link className="nav-link-li" to="/allrequests"><MenuItem onClick={handleClose}>All Requests</MenuItem></Link>
                                            </Menu>
                                    </li>
                                    <li className ="inline-li"><Link className="nav-link-li" to="/drawings">Drawings</Link></li>
                                    <li className ="inline-li"><Link className="nav-link-li" to="/admin">Admin</Link></li>
                                    <li className ="inline-li"><Link className="nav-link-li" to="/home" onClick={()=>props.dispatch({type:'LOGOUT'})}>Log Out</Link></li>
                                </ul>
                            </div>
                        <div className="nav-line"></div> 
                </HashRouter>
            )
}

export default connect(mapStoreToProps)(SuperAdminNav);