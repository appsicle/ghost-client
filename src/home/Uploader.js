import Dropzone from 'react-dropzone-uploader';
import { useState } from 'react';

const MyUploader = () => {
  const [fileNames, setFileNames] = useState([]);

  // specify upload params and url for your files
  const getUploadParams = ({ file, meta }) => {
    setFileNames([fileNames].concat(meta.name));
    console.log(fileNames);
    const body = new FormData();
    body.append('file', file);
    return { url: 'http://localhost:8000' };
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
