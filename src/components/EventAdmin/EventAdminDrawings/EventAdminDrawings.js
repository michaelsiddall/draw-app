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
import Nav from '../../Nav/Nav';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
class EventAdminDrawings extends Component {
    state = {
        heading: 'Drawings',
        showDrawings: "pending",
    };

    componentDidMount() {
        this.props.dispatch({ type: 'GET_PENDING_DRAWINGS' });
        this.props.dispatch({ type: 'GET_APPROVED_DRAWINGS' });
        this.props.dispatch({ type: 'GET_DISAPPROVED_DRAWINGS' });


    }

    //handleChange for dropdown menu
    handleChange = (event) => {
        this.setState({
            ...this.state,
            showDrawings: event.target.value || null
        })
        console.log('state is:', this.state);
    }




    render() {
        return (
            <div>
                <Nav />
                <div className="page">


                    <h2 className="centered smallerTitle">{this.state.heading}</h2>
                    <p className="centered">click drawing for more information</p>
                    <div className="centered">
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
                    </div>


                    {/* {JSON.stringify(this.props.store.drawing)} */}
                    <div className="galleryGrid">
                        <ImageList variant="masonry" cols={3} gap={3}>

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
                        </ImageList>

                    </div>
                </div>
            </div >
        );
    }
}

export default connect(mapStoreToProps)(EventAdminDrawings);