import axios from 'axios';

export default class FackYoutube {
  constructor() {}
  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }
  async #searchByKeyword(keyword) {
    return axios.get(`/videos/search.json`)
    .then((res) => res.data.items)
    .then(items) => items.map(item => ({...item, id: item.id.videoId}));
  }
}
