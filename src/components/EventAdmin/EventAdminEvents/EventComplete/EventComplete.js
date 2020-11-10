import React, { Component} from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';
import Button from '@material-ui/core/Button';

class EventComplete extends Component {
  
  completeEvent = ()=>{
     this.props.dispatch({
                    type: 'COMPLETE_EVENT',
                    url: `/api/event/completed/${this.props.item.id}`
    });
  }

  render() {
    
    return (
      <>
        <Button onClick={this.completeEvent}>Complete</Button>
      </>
    );
  }
}

export default connect(mapStoreToProps)(EventComplete);
