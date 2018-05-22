import { post } from './axios'
import { get } from './axios'

export const device = {
  gatewayEvent(params) {
    return post({
      url: '/device/event/gateway',
      params: params
    })
  }
}
