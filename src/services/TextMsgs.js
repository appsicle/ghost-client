import axios from 'axios';
import config from '../config';

export const postTextMsgs = (additionalInfo, imageURLs) =>
  new Promise((resolve, reject) => {
    if (!additionalInfo || !imageURLs) {
      reject(
        new Error(
          `Null fields found: additionalInfo: ${additionalInfo}, imageURLs: ${imageURLs}`,
        ),
      );
      return;
    }

    const apiEndpoint = `${config.apiUrl}/api/textMsgs/submit`;

    console.log({
      additionalInfo,
      imageURLs,
    });

    axios
      .post(`${apiEndpoint}`, {
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
