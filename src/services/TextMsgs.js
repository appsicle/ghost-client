import axios from 'axios';
import config from '../config';

const postTextMsgs = (title, type, additionalInfo, imageURLs) =>
  new Promise((resolve, reject) => {
    if (!title || !type || !additionalInfo || !imageURLs) {
      reject(
        new Error(
          `Null fields found: title: ${title}, type: ${type} additionalInfo: ${additionalInfo}, imageURLs: ${imageURLs}`,
        ),
      );
      return;
    }

    const apiEndpoint = `${config.apiUrl}/api/textMsgs/submit`;

    console.log({
      title,
      type,
      additionalInfo,
      imageURLs,
    });

    axios
      .post(`${apiEndpoint}`, {
        title,
        type,
        additionalInfo,
        imageURLs,
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });

export default postTextMsgs;
