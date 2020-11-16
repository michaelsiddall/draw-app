import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';

// const dropStyles = {
//   height: '50px',
//   width: '200px',
//   //border: '1px solid black',
//   'background-color': '#dddddd',
// };

class ImageUpload extends Component {
  handleFinishedUpload = (info) => {
    console.log('File uploaded with filename', info.filename);
    console.log('Access it on s3 at', info.fileUrl);

    this.props.dispatch({
      type: 'POST_IMAGE_URL',
      payload: info.fileUrl,
    });
  };

  render() {
    console.log('ENV', process.env.REACT_APP_S3_URL);

    const uploadOptions = {};

    const s3Url = process.env.REACT_APP_S3_URL;
    const innerDropElement = (
      <div>
        <p>Click or Drop File Here</p>
      </div>
    );
    return (
      <DropzoneS3Uploader
        //children={innerDropElement}
        onFinish={this.handleFinishedUpload}
        s3Url={s3Url}
        //style={dropStyles}
        maxSize={1024 * 1024 * 5}
        upload={uploadOptions}
      />
    );
  }
}

export default connect()(ImageUpload);
