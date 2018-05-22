import {user} from './user'
import {room} from './room'
import {device} from './device'
const combinePost = Object.assign(user, room, device);
export const http = combinePost;
