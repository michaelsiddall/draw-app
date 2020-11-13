import React, { Component } from 'react';
import { connect } from 'react-redux';

import AuthEdit from './AuthEdit';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class AppAdmin extends Component {
  state = {
    heading: 'App Admin',
  };

  componentDidMount = () => {
    this.props.dispatch({
      type: 'FETCH_USERS',
    });
  };

  render() {
    return (
      <div>
        <h2>Users and Permissions</h2>
        {this.props.auth.map((auth) => (
          <div key={auth.id}>
            <p>Id: {auth.id}</p>
            <p>username: {auth.username}</p>
            <p>auth level: {auth.auth_level}</p>
            <AuthEdit user={auth} />
          </div>
        ))}
        ;
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(AppAdmin);
