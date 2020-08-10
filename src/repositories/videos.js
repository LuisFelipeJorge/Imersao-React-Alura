import config from '../config';

const URL_VIDEOS = `${config.URL}/videos`;

function create(videoObject) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(videoObject),
  })
    .then(async (res) => {
      if (res.ok) {
        const result = await res.json();
        return result;
      }
      throw new Error('Cannot access data');
    });
}

export default {
  create,
};
