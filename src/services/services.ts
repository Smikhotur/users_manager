import axios from 'axios';
const API_URL = 'https://23.88.43.148';

const client = axios.create({
  baseURL: API_URL,
  responseType: 'json',
});

class service {
  get(api: string) {
    return client.get(api);
  }

  post(api: string, data: {} | string) {
    return client.post(api, data);
  }

  put(api: string, data: {} | string) {
    return client.put(api, data);
  }

  delete(api: string) {
    return client.delete(api);
  }
}

export default new service();
