<template>
  <div class="app-home">
    <div class="app-header">
      <div class="tool-item">
        <mu-flexbox class="mt8">
          <mu-flexbox-item class="home-name">
            <span class="word">{{userInfo.name}}的家</span>
            <mu-icon class="tool-icon" value="keyboard_arrow_right"/>
          </mu-flexbox-item>
          <mu-flexbox-item class="add-device-button" >
            <mu-icon class="tool-icon" value="developer_board" @click="goto('/newDeviceList')"/>
          </mu-flexbox-item>
        </mu-flexbox>
      </div>
    </div>
    <div class="app-content">
      <div class="common-info">
        <div class="row-1">
          <div class="temperature">
            <span class="number">
              11
            </span>
            <span class="unit">
              ℃
            </span>
          </div>
          <div class="locale">
            <span>
              北京市·朝阳区
            </span>
            <br/>
            <span>
              多云
            </span>
          </div>
        </div>
        <div class="row-2">
          <span>室外空气 良</span> |
          <span>水质 不可直饮</span> |
          <span>湿度 适宜</span>
        </div>
      </div>
      <mu-row gutter>
        <mu-col width="20" tablet="50" desktop="10">
          <mu-paper class="room-list" :zDepth="2" rounded>
            <div class="icon-item">
              <mu-icon value="apps"/>
              <div class="icon-item-word">常用</div>
            </div>
            <div class="boundary"></div>

<div class="room-list-midle">
            <div class="icon-item" @click="changeRoom(room), roomIsActive = index" :class="{active: index==roomIsActive}" v-for="(room, index) in rooms" :key="index">
              <mu-icon value="home" />
              <div class="icon-item-word" >{{room.name}}</div>
            </div>
</div>
            <div class="room-settings" @click="goto('/room/roomList')">
              <mu-divider />
              <div class="icon-item">
              <mu-icon value="settings"/>
            </div>
            </div>
          </mu-paper>
        </mu-col>
        <mu-col width="80" tablet="50" desktop="90">
          <mu-paper class="room-detail" :zDepth="2" rounded>
            <div class="header">
              <span class="title">{{mRoom.name}}</span>
              <span class="device-count">{{mRoom.devices.length}}个设备</span>
            </div>
            <div class="device-list">

              <mu-list>
                <mu-list-item :title="device.name" class="device-item" v-for="(device, index) in mRoom.devices" :key="index" @click="deviceOnCLick(device)">
                  <mu-avatar :src="'./static/image/wangguan.png'" slot="leftAvatar"/>
                  <span slot="describe">
                    设备在线
                  </span>
                  <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
                    <mu-menu-item title="删除"/>
                  </mu-icon-menu>
                </mu-list-item>
                <mu-divider inset/>

              </mu-list>
            </div>
          </mu-paper>
        </mu-col>
      </mu-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      roomIsActive: null,
      mRoom: {
        devices: []
      }
    };
  },
  beforeCreate() {
    this.$store.dispatch("changeNavState", true);
    this.$http.rooms(this.$store.state.user.authUser.userId).then(
      res => {
        this.$store.dispatch("setRooms", res.rooms);
      },
      error => {}
    );
  },
  mounted() {},
  methods: {
    changeRoom(room) {
      this.$http.getRoom(room.roomId).then(
        res => {
          this.mRoom = res.room;
        },
        error => {}
      );
    },
    deviceOnCLick(device) {
      switch (device.type) {
        case "gateway":
          this.goto("/device/gateway?deviceId=" + device.deviceId);
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style scoped>
.boundary {
  border-bottom: solid 1px gray;
  margin: 10px;
  position: relative;
  top: -16px;
}

.app-home {
  background-size: cover;
  background-color: rgb(22, 22, 80);
}

.app-home .app-header {
  height: 24px;
  padding: 6px 8px;
  color: snow;
}

.app-home .app-header .tool-item {
  padding: 0 10px;
}

.app-home .app-header .tool-item .add-device-button {
  text-align: right;
}

.app-home .app-header .tool-item .home-name .word {
  position: relative;
  bottom: 7px;
  font-size: 16px;
}

.app-home .app-content {
  position: absolute;
  top: 24px;
  bottom: 0;
  width: 100%;
  padding: 6px;
}

.app-home .app-content .common-info {
  height: 88px;
  padding: 0 10px;
  color: snow;
}

.app-home .app-content .common-info .row-1 .temperature {
  width: 80px;
  display: inline-block;
}

.app-home .app-content .common-info .row-1 .temperature .number {
  position: absolute;
  font-size: 50px;
}

.app-home .app-content .common-info .row-1 .temperature .unit {
  position: relative;
  top: 40px;
  left: 50px;
}

.app-home .app-content .common-info .row-1 .locale {
  top: 40px;
  position: relative;
  display: inline-block;
  font-size: 10px;
}

.app-home .app-content .common-info .row-2 {
  position: relative;
  top: 40px;
  margin-bottom: 100px;
}

.app-home .app-content .row {
  position: relative;
  top: 15px;
  height: calc(100% - 108px);
}

.app-home .app-content .col {
  height: 100%;
}

.app-home .app-content .room-list {
  height: 100%;
}
.app-home .app-content .room-list .room-list-midle {
  overflow: auto;
  height: 266px;
}

.app-home .app-content .room-list .room-settings {
  position: absolute;
  bottom: 4px;
  left: 4px;
}
.app-home .app-content .room-list .room-settings .mu-divider {
  background-color: gray;
}

.app-home .app-content .room-detail {
  height: 100%;
}

.app-home .app-content .room-detail .header {
  height: 65px;
  border-bottom: solid 1px gray;
  padding: 10px;
  text-align: left;
  background-color: #eeeeee;
}

.app-home .app-content .room-detail .header .title {
  position: relative;
  top: 10px;
  right: 0;
  width: 50px;
  font-size: 18px;
}

.app-home .app-content .room-detail .header .device-count {
  position: relative;
  left: 10px;
  top: 10px;
  font-size: 10px;
}

.app-home .app-content .room-detail .device-list {
}

.app-home .app-content .room-detail .device-list .device-item .mu-avatar {
    background-color: #fff;
}
.app-home .app-content .room-detail .device-list .device-item .mu-avatar img{
    border-radius: 50% !important;
}

.app-home .app-content .room-detail .device-list .device-item .mu-item-title {
  font-size: 16px;
}

.app-home .app-content .room-detail .device-list .device-item .mu-item-text {
  font-size: 8px;
}

.app-home .app-content .room-list .room-item {
  font-size: 18px;
  padding: 6px;
}

.app-content .icon-item {
  cursor: pointer;
  transition: transform 150ms ease-out;
  position: relative;
  padding: 10px;
  font-size: 14px;
  text-align: center;
}
.app-content .icon-item.active {
  color: #19be6b;
}

.icon-item .icon-item-word {
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: -5px;
  margin-bottom: 5px;
}
</style>

