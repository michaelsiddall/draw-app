import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../../redux/mapStoreToProps";
import "./UserMaterialRequest.css";

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

        this.props.dispatch({
            type: "ADD_REQUEST",
            payload: this.state.materialRequest,
        });
    };

    render() {
        console.log("redux state is", this.props.store);
        return (
            <div>
                <h2 className="centered">Material Request</h2>

                <h5 className="centered">Location</h5>
                <select
                    className="inputCentered"
                    defaultValue={"DEFAULT"}
                    onChange={(event) => this.onChange(event, "location")}
                >
                    <option value="DEFAULT" disabled>
                        Select Event
          </option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>

                <h5 className="centered">Table Number</h5>
                <input
                    className="inputCentered"
                    type="number"
                    placeholder="Select a Table"
                    min="1"
                    max="99"
                    onChange={(event) => this.onChange(event, "tableNumber")}
                ></input>

                <h5 className="centered">Number of Artists</h5>
                <input
                    className="inputCentered"
                    type="number"
                    placeholder="Select a Number"
                    min="1"
                    max="15"
                    onChange={(event) => this.onChange(event, "artistNumber")}
                ></input>
                <br></br>
                <button className="buttonCentered" onClick={this.onSubmit}>
                    Request Drawing Materials
        </button>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(UserMaterialRequest);