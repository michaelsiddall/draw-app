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
    content: (<div id="not-hidden">Click To Upload Drawings</div>)
  }

  renderImage = ({uploadedFile}) => 
  (<div className="rdsu-image"><img src={uploadedFile.fileUrl} id="up-img"/></div>)
  
  renderProgress = ({progress}) => (progress ? (
        <div id="progress-outer-div"><ProgressCircle progress={progress}/></div>
  ) : null)

  hideMe = () =>{
    this.setState({
      content:null
    })
  }

  
  render() {
    const uploadOptions = {};
    const s3Url = process.env.REACT_APP_S3_URL;
    return (
      <div>
            <DropzoneS3Uploader
              onClick={this.hideMe}
              imageComponent={this.renderImage}
              progressComponent={this.renderProgress}
              onFinish={this.handleFinishedUpload}
              s3Url={s3Url}
              maxSize={1024 * 1024 * 5}
              upload={uploadOptions}
              children={this.state.content}
            />
      </div>
    );
  }
}

export default connect()(ImageUpload);
