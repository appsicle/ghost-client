import axios from 'axios';
import config from '../config';

export const postTextMsgs = (firstName, email, additionalInfo, imageURLs) =>
  new Promise((resolve, reject) => {
    if (!firstName || !email || !additionalInfo || !imageURLs) {
      reject(
        new Error(
          `Null fields found: firstName: ${firstName}, email: ${email}, additionalInfo: ${additionalInfo}, imageURLs: ${imageURLs}`,
        ),
      );
      return;
    }

    const apiEndpoint = `${config.apiUrl}/api/textMsgs/submit`;

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
  const apiEndpoint = `${config.apiUrl}/api/textMsgs/retrieve`;

  axios.get(`${apiEndpoint}/${id}`);
};
