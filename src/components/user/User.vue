<template>
  <div class="app-user">
    <div class="user-top">
      <div class="user-info">
        <div class="avatar">
          <img :src="userInfo.headImgUrl"/>
        </div>
        <div class="user-name">
        <span>{{userInfo.name}}</span>
        </div>
        <div class="device-count">
        <span>{{devices.length}}个智能设备</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: "user",
    computed: {
    
    },
    beforeCreate() {
      this.$store.dispatch('changeNavState', true)
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
