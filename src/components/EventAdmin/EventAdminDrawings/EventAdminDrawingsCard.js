import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Swal from 'sweetalert2';

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
    onApprove = () => {
        console.log('approve image with id of ', this.props.drawing.id);
        this.props.dispatch({
            type: 'APPROVE_DRAWING',
            payload: this.props.drawing.id
        });
    }
    onDisapprove = () => {
        console.log('disapprove image with id of ', this.props.drawing.id);
        this.props.dispatch({
            type: 'DISAPPROVE_DRAWING',
            payload: this.props.drawing.id
        });
    }
    onDelete = () => {
        console.log('delete image with id of ', this.props.drawing.id);

        Swal.fire({
            title: 'are you sure you want to delete this drawing?',
            text: "you won't be able to undo this action!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#9dac68',
            cancelButtonColor: '#e26d5c',
            confirmButtonText: 'yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.props.dispatch({
                    type: 'DELETE_DRAWING',
                    payload: this.props.drawing.id
                });
                Swal.fire('buh-bye!', '', 'success');

            }
        });


    }

    render() {
        return (
            <div>
                <Card className="pendingItem" key={this.props.drawing.id}>
                    <div onClick={this.clickText}>
                        {this.state.isClicked ?
                            <img src={this.props.drawing.image_url} alt="image" height="200" /> :
                            <div className="imageText"><h2>{this.props.drawing.name}</h2></div>
                        }
                    </div>

                    <CardActions>
                        {this.props.drawing.approved ?
                            <Button size="medium" color="primary" onClick={this.onDisapprove}>disapprove</Button> :
                            <Button size="medium" color="primary" onClick={this.onApprove}>approve</Button>
                        }
                        <Button size="medium" color="primary" onClick={this.onDelete}>delete</Button>

                    </CardActions>
                </Card>
            </div>

        );
    }
}

export default connect(mapStoreToProps)(EventAdminDrawingsCard);