import React, { Component} from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

class EventComplete extends Component {
  
  completeEvent = ()=>{
     this.props.dispatch({
                    type: 'COMPLETE_EVENT',
                    url: '/api/event',
                    payload: this.props.item.id
    });
  }

  render() {
    console.log('EventComplete Item ID', this.props.item.id);
    return (
      <>
        <Checkbox onClick={this.completeEvent}/>
      </>
    );
  }
}

export default connect(mapStoreToProps)(EventComplete);
