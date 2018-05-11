

export default {
    //用户信息
    userInfo: {
      get() {
        return this.$store.state.user.authUser
      }
    },
    devices: {
      get() {
        return this.$store.state.user.devices
      }
    },
    rooms: {
      get() {
        return this.$store.state.user.rooms
      }
    },
    //是否显示导航栏
    isShowNavigateBar: {
      get() {
        return this.$store.state.system.isShowNavigateBar
      }
    }

}
