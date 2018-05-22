import axios from 'axios'
import conf from '../config'


axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.baseURL = conf.baseUrl();


axios.interceptors.request.use((config) => {
  //请求之前
  return config;
}, (error) => {
  return Promise.reject(error);
});

axios.interceptors.response.use((res) => {
  //响应之后
  return Promise.resolve(res.data)
}, (error) => {
  return Promise.reject(error);
});


export function post(config) {
  return new Promise((resolve, reject) => {
    axios.post(config.url, config.params)
      .then(response => {
        resolve(response);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}
export function get(config) {
  return new Promise((resolve, reject) => {
    axios.get(config.url)
      .then(response => {
        resolve(response);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}
