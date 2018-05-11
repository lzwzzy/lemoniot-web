<template>
  <div class="wxlogin"></div>
</template>

<script>
export default {
  created() {
    /*
      * 路由存在code字段表示微信授权回调成功
      * */
    if (this.$route.query.code) {
      console.log("回调成功");
      const self = this;
      let data = {
        //微信方式登陆
        type: 1,
        account: this.$route.query.code,
        visit: this.$route.query.state
      };
      this.$http.login(data).then(
        res => {
          console.log(res);
          this.$store.dispatch("setAuthUser", res.user);
          this.$http.devices(res.user.userId).then(
            res => {
              this.$store.dispatch("setDevices", res.devices);
            },
            error => {}
          );
          this.$http.rooms(res.user.userId).then(
            res => {
              this.$store.dispatch("setRooms", res.rooms);
            },
            error => {}
          );
          self.goto(data.visit);
        },
        error => {}
      );
    } else {
      /*
        * 非微信授权回调
        * */
      console.log("sdf");
    }
  }
};
</script>
