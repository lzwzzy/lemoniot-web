import { post } from './axios'

export const user = {
  login(params) {
    return post({
      url: '/user/login',
      params: params})
  }
}
