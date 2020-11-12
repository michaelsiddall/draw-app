import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import EventAdminDrawingsCard from './EventAdminDrawingsCard';
import './EventAdminDrawings.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';


class EventAdminDrawings extends Component {
    state = {
        heading: 'Drawings',
        showDrawings: "pending",
        data: false
    };

    componentDidMount() {
        // this.props.dispatch({ type: 'GET_PENDING_DRAWINGS' });
        // this.props.dispatch({ type: 'GET_APPROVED_DRAWINGS' });
        // this.props.dispatch({ type: 'GET_DISAPPROVED_DRAWINGS' });

        this.loadData().then(data =>
            this.setState({ data: data }))

    }

    //handleChange for dropdown menu
    handleChange = (event) => {
        this.setState({
            ...this.state,
            showDrawings: event.target.value || null
        })
        console.log('state is:', this.state);
    }


    async loadData() {
        this.props.dispatch({ type: 'GET_PENDING_DRAWINGS' });
        this.props.dispatch({ type: 'GET_APPROVED_DRAWINGS' });
        this.props.dispatch({ type: 'GET_DISAPPROVED_DRAWINGS' });

    }

    render() {
        if (this.state.data === false) {
            return <div><h1>loading...</h1></div>
        }
        return (
            <div>
                <h2>{this.state.heading}</h2>
                <FormControl >
                    <InputLabel id="drawing-dropdown-label">Select Drawings to View</InputLabel>
                    <Select
                        style={{ width: `300px` }}
                        labelId="drawing-dropdown-label"
                        id="drawing-dropdown"
                        onChange={(event) => this.handleChange(event)}
                        displayEmpty
                    >
                        <MenuItem value={"pending"}>Drawings Pending Approval</MenuItem>
                        <MenuItem value={"approved"}>Approved Drawings</MenuItem>
                        <MenuItem value={"disapproved"}>Disapproved Drawings</MenuItem>
                    </Select>
                </FormControl>

                {/* {JSON.stringify(this.props.store.drawing)} */}
                <div className="pendingGrid">

                    {this.state.showDrawings === "pending" &&
                        this.props.store.pending.map((drawing) => {
                            return (<EventAdminDrawingsCard drawing={drawing} />);
                        })}
                    {this.state.showDrawings === "approved" &&
                        this.props.store.approved.map((drawing) => {
                            return (<EventAdminDrawingsCard drawing={drawing} />);
                        })}
                    {this.state.showDrawings === "disapproved" &&
                        this.props.store.disapproved.map((drawing) => {
                            return (<EventAdminDrawingsCard drawing={drawing} />);
                        })}
                </div>
            </div >
        );
    }
}

export default connect(mapStoreToProps)(EventAdminDrawings);