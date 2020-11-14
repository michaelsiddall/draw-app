import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';
import QueueComplete from "../QueueConfirm/QueueComplete";
import QueueDelete from "../QueueConfirm/QueueDelete";

class QueueItem extends Component {
    componentDidUpdate(prevProps, prevState) {
 
      if (prevState.refresh !== this.state.refresh) {
        this.props.dispatch({
            type: 'FETCH_BY_EVENT', //grabs only uncompleted requests by event id
            payload: this.props.match.params.id
          });
      }
      else {
        return null
      }
}
  state = {
    refresh: ''
  }

  refresh = () =>{
    this.setState({
      refresh: true
    })
  }


  render() {

    return (
      <>
        <tr>
          <td>{this.props.item.table_number}</td>
          <td>{this.props.item.artist_count}</td>
          <td><QueueComplete
              tableNumber= {this.props.item.table_number}
              artistCount = {this.props.item.artist_count}
              item={this.props.item}
              eventID = {this.props.eventID}
          /></td>
          <td><QueueDelete onClick= {this.refresh}
              tableNumber= {this.props.item.table_number}
              artistCount = {this.props.item.artist_count}
              item={this.props.item}
              eventID = {this.props.eventID}
          /></td>
        </tr>
      </>
    );

  }
}

export default connect(mapStoreToProps)(QueueItem);
