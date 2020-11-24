import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import "./ImageUpload.css"
import Grid from '@material-ui/core/Grid';


function CircularProgressWithLabel(props) {
  return (
    <div id= "progress-main-container">
        <Grid id="progress-container">
            <CircularProgress value={props.progress} color="secondary" variant="determinate" {...props} />
                <Typography id="progress-text">{`${Math.round(
                props.value
                )}%`}</Typography>
        </Grid>
    </div>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};



function CircularStatic(props) {

  return <CircularProgressWithLabel value={props.progress} />;
}

export default connect(mapStoreToProps)(CircularStatic);