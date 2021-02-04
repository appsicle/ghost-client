import Dropzone from 'react-dropzone-uploader';
import axios from 'axios';

// TODO: remove files from UI after submission
const MyUploader = ({ setImageURLs }) => {
  // specify upload params and url for your files
  const apiEndpoint = `${
    process.env.NODE_ENV === 'development'
      ? window.env.API_ENDPOINT_DEV
      : window.env.API_ENDPOINT_PROD
  }/api/getSignedURL`;
  const getUploadParams = async ({ file }) => {
    const res = await axios.get(apiEndpoint);
    const { uploadURL, key } = res.data;
    const fileUrl = `${window.env.S3_BUCKET_ENDPOINT}/${key}`;
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
