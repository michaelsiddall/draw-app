import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class AppAdmin extends Component {
  state = {
    heading: 'Class Component',
  };

  componentDidMount = () => {
    this.props.dispatch({
      type: 'FETCH_USERS',
    });
  };

  editAuth = (id) => {
    console.log('edit auth for user: ', id);

    this.props.dispatch({
      type: 'EDIT_USER',
      url: `/api/admin/${id}`,
    });
    this.props.history.push(`/api/admin/edit/${id}`);
  };

  render() {
    return (
      <div>
        <h2>Users and Permissions</h2>
        {this.props.auth.map((auth) => (
          <div>
            <p>Id: {auth.id}</p>
            <p>username: {auth.username}</p>
            <p>auth level: {auth.auth_level}</p>
            <button onClick={() => this.editAuth(auth.id)}>Edit</button>
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
