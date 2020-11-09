import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

function EventsComplete(props) {

  

  return (
    <>
    <Checkbox/>
    </>
  );
}

export default connect(mapStoreToProps)(EventsComplete);
