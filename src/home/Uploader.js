import Dropzone from 'react-dropzone-uploader';
import axios from 'axios';
import config from '../config';

// TODO: remove files from UI after submission
const MyUploader = ({ setImageURLs, imageBucket }) => {
  // specify upload params and url for your files
  const apiEndpoint = `${config.apiUrl}/api/getSignedURL`;
  const getUploadParams = async ({ file }) => {
    console.log(file);
    const res = await axios.post(apiEndpoint, {
      contentType: file.type,
      bucket: imageBucket,
    });
    const { uploadURL, key } = res.data;
    const fileUrl = `${process.env.REACT_APP_S3_BUCKET_ENDPOINT}/${key}`;
    return {
      body: file,
      meta: { fileUrl, ACL: 'public-read' },
      url: uploadURL,
      method: 'PUT',
    };
  };

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
    if (status === 'done') {
      setImageURLs((prev) => [...prev, meta.fileUrl]);
    }
    if (status === 'removed') {
      // TODO: Remove file from state
    }
  };

  const dropzoneText = 'Drop your files here';
  const dropzoneAddMoreFilesText = 'Add More Files';
  const dropzoneClasses = {
    dropzone: 'dropzone',
    dropzoneActive: 'file-hover',
  };

  return (
    <Dropzone
      classNames={dropzoneClasses}
      inputContent={dropzoneText}
      inputLabelWithFiles={dropzoneAddMoreFilesText}
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      accept="image/*"
    />
  );
};

export default MyUploader;
