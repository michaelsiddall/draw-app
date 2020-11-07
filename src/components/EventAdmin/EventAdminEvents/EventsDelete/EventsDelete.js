import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';

function EventsDelete(props) {

  const [heading, setHeading] = useState('Functional Component');

  return (
    <div>
      <h2>{heading}</h2>
    </div>
  );
}

export default connect(mapStoreToProps)(EventsDelete);
