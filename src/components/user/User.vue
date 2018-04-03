<template>
  <div class="app-user">
    <div class="user-top">
      <div class="user-info">
        <div class="avatar">
          <img src="../../../static/image/lemon.png"/>
        </div>
        <div class="user-name">
        <span>刘志伟</span>
        </div>
        <div class="device-count">
        <span>3个智能设备</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import conf from '../../config/index'
  export default {
    name: "user",
    created() {
      window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + conf.wx.appid + "&redirect_uri=" + encodeURIComponent(conf.wx.redirect_uri) + "&response_type=code&scope=" + conf.wx.scope + "&state=STATE#wechat_redirect"
    }
  }
</script>

<style scoped>
  .app-user .user-top{
    height: 240px;
  }

  .app-user .user-info {
    height: 160px;
    margin: 0 auto;
    text-align: center;
    border-bottom: solid 1px #eeeeee;
    padding: 20px;
  }

  .app-user .user-info .avatar {
    display: inline-block;
    height: 60px;
    width: 60px;
    font-size: 20px;
    color: #fff;
    background-color: #bdbdbd;
    text-align: center;
    border-radius: 50%;
  }

  .app-user .user-info img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    display: block;
  }

  .app-user .user-info .user-name {
    font-size: 14px;
  }

  .app-user .user-info .device-count {
    font-size: 12px;
    color: gray;
  }
</style>
