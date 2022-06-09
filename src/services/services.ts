import axios from 'axios';
const API_URL = 'http://23.88.43.148';

const client = axios.create({
  baseURL: API_URL,
  responseType: 'json',
});

class service {
  get(api: string) {
    return client.get(api).catch(function (error) {
      return error.toJSON();
    });
  }

  post(api: string, data: {} | string) {
    return client.post(api, data).catch(function (error) {
      return error.toJSON();
    });
  }

  put(api: string, data: {} | string) {
    return client.put(api, data).catch(function (error) {
      return error.toJSON();
    });
  }

  delete(api: string) {
    return client.delete(api).catch(function (error) {
      return error.toJSON();
    });
  }
}

export default new service();
