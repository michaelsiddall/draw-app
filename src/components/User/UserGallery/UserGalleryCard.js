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

    render() {
        return (
            <div>
                <Card className="galleryItem" key={this.props.drawing.id}>
                    <div onClick={this.clickText}>
                        {this.state.isClicked ?
                            <img src={this.props.drawing.image_url} alt="image" height="200" /> :
                            <div className="imageText"><h2>{this.props.drawing.name}</h2></div>
                        }
                    </div>
                </Card>
            </div>

        );
    }
}

export default connect(mapStoreToProps)(EventAdminDrawingsCard);