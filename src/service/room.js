import { post } from './axios'
import { get } from './axios'

export const room = {
  getRoom(roomId) {
    return get({
      url: '/rooms/' + roomId
    })
  },
  addRoom(room) {
    return post({
      url: '/rooms/addRoom',
      params: room
    })
  },
  saveRoom(room) {
    return post({
      url: '/rooms/' + room.roomId + '/save',
      params: room
    })
  },
  getRoomDevices(roomId) {
    return get({
      url: '/rooms/' + roomId + '/devices'
    })
  }
}
