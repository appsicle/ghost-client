import Dropzone from 'react-dropzone-uploader';
import axios from 'axios';
import config from '../config';
import { defaultUpload } from '../icons/links';
import './Uploader.scss';

// TODO: remove files from UI after submission
const MyUploader = ({
  setImageURLs, imageBucket, maxFiles = 10, displayedImage = defaultUpload,
}) => {
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
      setImageURLs((prev) => prev.filter((fileUrl) => fileUrl !== meta.fileUrl));
    }
  };

  const dropzoneText = (
    <div className="dropzone-text-container">
      <img className="dropzone-icon" src={displayedImage} alt="chatting" />
      <h4 className="dropzone-text dropzone-header">Drag &amp; drop images</h4>
      <h6 className="dropzone-text dropzone-subheader">or click to upload</h6>
    </div>
  );
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
      maxFiles={maxFiles}
    />
  );
};

export default MyUploader;
