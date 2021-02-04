import axios from 'axios';

export const postTextMsgs = (
  firstName,
  email,
  additionalInformation,
  imageURLs,
) => new Promise((resolve, reject) => {
  if (!firstName || !email || !additionalInformation || !imageURLs) {
    reject(
      new Error(
        `Null fields found: firstName: ${firstName}, email: ${email}, additionalInformation: ${additionalInformation}, imageURLs: ${imageURLs}`,
      ),
    );
    return;
  }

  const apiEndpoint = `${
    process.env.NODE_ENV === 'development'
      ? window.env.API_ENDPOINT_DEV
      : window.env.API_ENDPOINT_PROD
  }/api/textMsgs/submit`;

  console.log({
    firstName,
    email,
    additionalInformation,
    imageURLs,
  });

  axios
    .post(`${apiEndpoint}/79823`, {
      firstName,
      email,
      additionalInformation,
      imageURLs,
    })
    .then((res) => resolve(res))
    .catch((err) => reject(err));
});

export const getTextMsgs = (id) => {
  const apiEndpoint = `${
    process.env.NODE_ENV === 'development'
      ? window.env.API_ENDPOINT_DEV
      : window.env.API_ENDPOINT_PROD
  }/api/textMsgs/retrieve`;

  axios.get(`${apiEndpoint}/${id}`);
};
