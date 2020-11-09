import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../../redux/mapStoreToProps";

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class UserMaterialRequest extends Component {
  state = {
    materialRequest: {
      location: null,
      tableNumber: null,
      artistNumber: null,
    },
  };

  onChange = (event, property) => {
    console.log("payload is", property, event.target.value);
    this.setState({
      materialRequest: {
        ...this.state.materialRequest,
        [property]: event.target.value,
      },
    });
  };

  onSubmit = () => {
    console.log("This is the materials request", this.state.materialRequest);
    console.log("redux state is", this.props.store);

    this.props.dispatch({
      type: "ADD_REQUEST",
      payload: this.state.materialRequest,
    });
  };

  render() {
    return (
      <div>
        <h2>Material Request</h2>

        <h5>Location</h5>
        <select
          defaultValue={"DEFAULT"}
          onChange={(event) => this.onChange(event, "location")}
        >
          <option value="DEFAULT" disabled>
            Select Event
          </option>
          <option>Surly Brewing</option>
          <option>Lyn/Lake Brewing</option>
          <option>612 Brewing</option>
        </select>

        <h5>Table Number</h5>
        <input
          type="number"
          placeholder="Select a Table"
          min="1"
          max="99"
          onChange={(event) => this.onChange(event, "tableNumber")}
        ></input>

        <h5>Number of Artists</h5>
        <input
          type="number"
          placeholder="Select a Number"
          min="1"
          max="15"
          onChange={(event) => this.onChange(event, "artistNumber")}
        ></input>
        <br></br>
        <button onClick={this.onSubmit}>Request Drawing Materials</button>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(UserMaterialRequest);
