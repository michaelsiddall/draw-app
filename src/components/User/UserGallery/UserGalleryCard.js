import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Swal from 'sweetalert2';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class EventAdminDrawingsCard extends Component {
    state = {
        isClicked: true
    }
    //when image is clicked, state is updated to its current opposite
    clickText = () => {
        console.log("showing text");
        this.setState({
            isClicked: !this.state.isClicked
        });
    }

    render() {
        return (
            <div>
                <GridListTile key={this.props.drawing.id}>
                    <img src={this.props.drawing.image_url} alt="drawing" />
                    {(this.props.drawing.name.length != null || this.props.drawing.about.length != null) &&
                        <GridListTileBar
                            title={<span>By: {this.props.drawing.name} </span>}
                            // subtitle={<span>By: {drawing.name} </span>}
                            actionIcon={
                                <IconButton aria-label={`info`} >
                                    <InfoIcon />
                                </IconButton>
                            }
                        />
                    }

                </GridListTile>
            </div>

        );
    }
}

export default connect(mapStoreToProps)(EventAdminDrawingsCard);