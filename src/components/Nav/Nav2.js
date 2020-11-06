import React from 'react';
import { HashRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
import LoginPage from "../../LoginPage"


function Nav(props) {
    const loggedIn = props.store.user.id

    if (loggedIn != null) {
        return (
            <HashRouter>
                <div className="nav-div">
                    <ul className="nav-list">
                        <li className="inline-li"><Link className="nav-link-li" to="/events">Events</Link></li>
                        <li className="inline-li"><Link className="nav-link-li" to="/approved">Approved</Link></li>
                        <li className="inline-li"><Link className="nav-link-li" to="/drawings">Drawings</Link></li>
                        <li className="inline-li"><Link className="nav-link-li" to="/home" onClick={() => props.dispatch({ type: 'LOGOUT' })}>Log Out</Link></li>
                    </ul>
                </div>
            </HashRouter>
        );
    }

    else {
        return (
            <HashRouter>
                <div className="nav-div">
                    <LoginForm />
                </div>

            </HashRouter>
        )
    }
}

export default connect(mapStoreToProps)(Nav);