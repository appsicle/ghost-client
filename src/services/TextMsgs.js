import axios from 'axios';

export const postTextMsgs = (
  firstName,
  email,
  additionalInfo,
  imageURLs,
) => new Promise((resolve, reject) => {
  if (!firstName || !email || !additionalInfo || !imageURLs) {
    reject(
      new Error(
        `Null fields found: firstName: ${firstName}, email: ${email}, additionalInfo: ${additionalInfo}, imageURLs: ${imageURLs}`,
      ),
    );
    return;
  }

  const apiEndpoint = `${
    process.env.NODE_ENV === 'development'
      ? process.env.REACT_APP_API_ENDPOINT_DEV
      : process.env.REACT_APP_API_ENDPOINT_PROD
  }/api/textMsgs/submit`;

  console.log({
    firstName,
    email,
    additionalInfo,
    imageURLs,
  });

  axios
    .post(`${apiEndpoint}/79823`, {
      firstName,
      email,
      additionalInfo,
      imageURLs,
    })
    .then((res) => resolve(res))
    .catch((err) => reject(err));
});

export const getTextMsgs = (id) => {
  const apiEndpoint = `${
    process.env.NODE_ENV === 'development'
      ? process.env.REACT_APP_API_ENDPOINT_DEV
      : process.env.REACT_APP_API_ENDPOINT_PROD
  }/api/textMsgs/retrieve`;

  axios.get(`${apiEndpoint}/${id}`);
};
