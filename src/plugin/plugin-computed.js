

export default {
    //用户信息
    userInfo: {
      get() {
        return this.$store.state.user.authUser
      }
    }
}
