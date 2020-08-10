import config from '../config';

const URL_CATEGORIES = `${config.URL}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (res) => {
      if (res.ok) {
        const result = await res.json();
        return result;
      }
      throw new Error('Cannot access data');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (res) => {
      if (res.ok) {
        const result = await res.json();
        return result;
      }
      throw new Error('Cannot access data');
    });
}

export default {
  getAllWithVideos,
  getAll,
};
