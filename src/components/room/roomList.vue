<template>
  <div class="room-list">
      <mu-list>
        <mu-sub-header>房间管理</mu-sub-header>
        <mu-list-item @click="goto('/room/' + room.roomId + '/editRoom')" :title="room.name" :describeText="room.devices.length + '个设备'" v-for="(room, index) in rooms" :key="index">
          <mu-avatar src="/images/avatar1.jpg" slot="leftAvatar"/>
          <mu-icon value="chevron_right" slot="right"/>
        </mu-list-item>
      </mu-list>
    <mu-float-button icon="add" class="add-room-btn" to="/room/addRoom"/>
  </div>
</template>

<script>
  export default {
    name: "room-list",
    beforeCreate() {
      this.$store.dispatch("changeNavState", false);
      this.$http.rooms(this.$store.state.user.authUser.userId).then(
        res => {
          this.$store.dispatch("setRooms", res.rooms);
        },
        error => {
        }
      );
    }
  }
</script>

<style scoped>
  .room-list {

  }
  .room-list .add-room-btn {
    position: absolute;
    bottom: 0;
    right: 26px;
  }
</style>
