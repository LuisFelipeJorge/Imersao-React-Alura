const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://jorgeflixapp.herokuapp.com';

export default {
  URL,
};
