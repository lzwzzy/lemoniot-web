<template>
  <div class="new-room-list">
      <mu-list>
        <mu-sub-header>选择一个你要创建的房间</mu-sub-header>
        <mu-list-item title="客厅" @click="addNewRoom('客厅','living-room')">
          <mu-avatar src="../static/image/keting.png" slot="leftAvatar"/>
          <mu-icon value="chevron_right" slot="right"/>
        </mu-list-item>
        <mu-list-item title="卧室" @click="addNewRoom('卧室','bedroom')">
          <mu-avatar src="../static/image/woshi.png" slot="leftAvatar"/>
          <mu-icon value="chevron_right" slot="right"/>
        </mu-list-item>
        <mu-list-item title="餐厅" @click="addNewRoom('餐厅','dining-room')">
          <mu-avatar src="../static/image/chanting.png" slot="leftAvatar"/>
          <mu-icon value="chevron_right" slot="right"/>
        </mu-list-item>
        <mu-list-item title="厨房" @click="addNewRoom('厨房','kitchen')">
          <mu-avatar src="../static/image/chufang.png" slot="leftAvatar"/>
          <mu-icon value="chevron_right" slot="right"/>
        </mu-list-item>
      </mu-list>
  </div>
</template>

<script>
export default {
  name: "add-room-list",
  data() {
    return {
      room: {
        roomId: "",
        name: ""
      }
    };
  },
  beforeCreate() {
    this.$store.dispatch("changeNavState", false);
  },
  methods: {
    addNewRoom(name, type) {
      let room = {
        name: name,
        type: type,
        user: this.userInfo
      }
      this.$http.addRoom(room).then(resp => {
        this.goto('/room/' + resp.room.roomId + '/editRoom')
      },error => {})
    }
  }
};
</script>

<style scoped>
.new-room-list .mu-avatar {
  background-color: #fff;
}
.new-room-list .mu-avatar img {
  border-radius: 20%;
}
</style>
