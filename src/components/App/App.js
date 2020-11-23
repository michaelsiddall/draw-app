import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';


import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

//unprotected routes
import Welcome from "../Welcome/Welcome";
import About from '../About/About';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';


//unprotected routes for participants
import UserDrawingSubmit from '../User/UserDrawingSubmit/UserDrawingSubmit';
import UserGallery from '../User/UserGallery/UserGallery';
import UserLandingPage from '../User/UserLandingPage/UserLandingPage';
import UserMaterialRequest from '../User/UserMaterialRequest/UserMaterialRequest';

//protect routes
import EventAdminEvent from '../EventAdmin/EventAdminEvent/EventAdminEvent';
import EventAdminDrawings from '../EventAdmin/EventAdminDrawings/EventAdminDrawings';
import EventAdminRequest from '../EventAdmin/EventAdminRequest/EventAdminRequest';
import EventCompleted from '../EventAdmin/EventAdminEvent/EventCompleted/EventCompleted';
import EventAdminQueue from '../EventAdmin/EventAdminQueue/EventAdminQueue';

//error 404
import Error404 from "../Error404/Error404";

//super admin only
import AppAdmin from '../AppAdmin/AppAdmin';

import './App.css';

//styling for material ui
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff066e"
    },
    secondary: {
      main: '#ffffff'
    }
  }
});

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' });
    //this.props.dispatch({ type: 'GET_PENDING_DRAWINGS' });
  }

  render() {
    return (
      <Router>

        <MuiThemeProvider theme={theme}>

          <Switch>
            <Redirect exact from='/' to='/userhome' />
            <Redirect exact from='/home' to='/login' />

            {/* USER ROUTES!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}
            <Route
              exact
              path='/userhome'
              component={UserLandingPage}
            />

            <Route
              exact
              path='/submit'
              component={UserDrawingSubmit}
            />

            <Route
              // logged in shows InfoPage else shows LoginPage
              exact
              path='/request'
              component={UserMaterialRequest}
            />

            <Route
              // logged in shows InfoPage else shows LoginPage
              exact
              path='/gallery'
              component={UserGallery}
            />

            {/* EVENT ADMIN ROUTES!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}
            {/* Visiting localhost:3000/about will show the about page. */}

            {/* For protected routes, the view could show one of several things on the same route.

            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}

            <ProtectedRoute
              // users will see this page, admins and superAdmins will redirect to events upon login
              exact
              path='/welcome'
              component={Welcome}
            />


            <ProtectedRoute
              // logged in shows InfoPage else shows LoginPage
              exact
              path='/events'
              component={EventAdminEvent}
            />

            <ProtectedRoute
              // logged in shows InfoPage else shows LoginPage
              exact
              path='/events/completed'
              component={EventCompleted}
            />

            <ProtectedRoute
              // logged in shows InfoPage else shows LoginPage
              path='/event/:id/requests'
              component={EventAdminQueue}
            />
            <ProtectedRoute
              // logged in shows InfoPage else shows LoginPage
              exact
              path='/allrequests'
              component={EventAdminRequest}
            />

            <ProtectedRoute
              // logged in shows InfoPage else shows LoginPage
              exact
              path='/drawings'
              component={EventAdminDrawings}
            />

            <ProtectedRoute
              // logged in shows InfoPage else shows LoginPage
              exact
              path='/admin'
              component={AppAdmin}
            />

            {/* When a value is supplied for the authRedirect prop the user will
            be redirected to the path supplied when logged in, otherwise they will
            be taken to the component and path supplied. */}
            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LoginPage at /login
              exact
              path='/login'
              component={LoginPage}
              authRedirect='/welcome'
            />
            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows RegisterPage at "/registration"
              exact
              path='/registration'
              component={RegisterPage}
              authRedirect='/welcome'
            />
            <Route
              exact
              path='/about'
              component={About}
            />

            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <Error404 />} />
          </Switch>
        </MuiThemeProvider>

      </Router>
    );
  }
}

export default connect()(App);
