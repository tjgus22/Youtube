import axios from 'axios';

export default class FackYoutube {
  constructor() {}
  async search(keyword) {
    return axios
      .get(`/videos/${keyword ? 'search' : 'popular'}.json`)
      .then((res) => res.data.items);
  }
}
