import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


class Error404 extends Component {


  render() {
    return (
      <div id="error-div">
       <h1>404! Sorry!</h1>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Error404);
