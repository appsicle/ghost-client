import Dropzone from 'react-dropzone-uploader';
import axios from 'axios';

const MyUploader = () => {
  // specify upload params and url for your files
  const getUploadParams = async ({ file }) => {
    const res = await axios.get('http://localhost:8000/api/getSignedURL');
    const { uploadURL, key } = res.data;
    const fileUrl = `https://ghost-texts.s3.amazonaws.com/${key}`;
    return {
      body: file, meta: { fileUrl, ACL: 'public-read' }, url: uploadURL, method: 'PUT',
    };
  };

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
  };

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles) => {
    console.log(files.map((f) => f.meta));
    allFiles.forEach((f) => f.remove());
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
      onSubmit={handleSubmit}
      accept="image/*"
    />
  );
};

export default MyUploader;
