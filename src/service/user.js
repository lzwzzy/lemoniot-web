import { post } from './axios'
import { get } from './axios'

export const user = {
  login(params) {
    return post({
      url: '/user/login',
      params: params})
  },
  devices(userId) {
    return get({
      url: '/user/'+ userId + '/devices'
    })
  },
  rooms(userId) {
    return get({
      url: '/user/'+ userId + '/rooms'
    })
  }
}
