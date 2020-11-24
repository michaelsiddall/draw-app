import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';
import ProgressCircle from "./ProgressCircle"
import "./ImageUpload.css"


class ImageUpload extends Component {
  handleFinishedUpload = (info) => {
    this.props.dispatch({
      type: 'POST_IMAGE_URL',
      payload: info.fileUrl,
    });
  };

  state = {
    hidden: false
  }

  renderImage = ({uploadedFile}) => 
  (<div className="rdsu-image"><img src={uploadedFile.fileUrl} id="up-img"/></div>)
  
  renderProgress = ({progress}) => (progress ? (
        <div id="progress-outer-div"><ProgressCircle progress={progress}/></div>
  ) : null)

  hideMe = () =>{
    this.setState({
      hidden: !this.state.hidden
    })
  }

  
  render() {
    const uploadOptions = {};
    const s3Url = process.env.REACT_APP_S3_URL;

    return (
      <div>
        <div id="s3-div">
         {/* <span id={this.state.hidden ? "hidden-click-me" : "not-hidden-click-me"} onClick={this.hideMe}> */}
           <span id="not-hidden-click-me">
            Click To Upload Drawings</span></div>
            <DropzoneS3Uploader
              imageComponent={this.renderImage}
              progressComponent={this.renderProgress}
              onFinish={this.handleFinishedUpload}
              s3Url={s3Url}
              maxSize={1024 * 1024 * 5}
              upload={uploadOptions}
            />
      </div>
    );
  }
}

export default connect()(ImageUpload);
