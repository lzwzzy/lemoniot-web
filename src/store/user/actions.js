export default {
  setAuthUser({commit}, authUser) {
    commit('SET_AUTHUSER', authUser)
  },
  setDevices({commit}, devices) {
    commit('SET_DEVICES', devices)
  },
  setRooms({commit}, rooms) {
    commit('SET_ROOMS', rooms)
  }
}
