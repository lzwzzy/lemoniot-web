<template>
  <div class="room-edit">
    <mu-list class="room-edit-item-list">
      <mu-list-item title="房间名称">
        <mu-icon slot="right" value="chevron_right"/>
        <span slot="right">{{room.name}}</span>
      </mu-list-item>
      <mu-list-item title="房间图标">
        <mu-icon slot="right" value="chevron_right"/>
      </mu-list-item>
    </mu-list>
    <mu-divider/>
    <mu-list class="all-devices-list">
      <mu-sub-header>{{userInfo.name}}的家</mu-sub-header>
      <mu-list-item :title="device.name" disableRipple v-for="(device, index) in devices" :key="index">
        <mu-avatar src="../../static/image/wangguan.png" slot="leftAvatar"/>
        <mu-checkbox :nativeValue="device" v-model="room.devices" slot="right"/>
        <span slot="describe">
          {{room}}
          <!--{{device.room ? '已选中' : '[' + device.room.name + ']'}}-->
        </span>
      </mu-list-item>
    </mu-list>
  </div>
</template>

<script>
  export default {
    name: "edit-room",
    data() {
      return {
        room: {
          roomId: this.$route.params.id,
          name: '',
          devices:[]
        },
        deviceSelected: false
      }
    },
    beforeCreate() {
      this.room = this.rooms.filter(room => {
        return room.roomId == this.$route.params.id;
      })
    }

  }
</script>

<style scoped>
  .room-edit {
    bottom: 0;
  }

  .room-edit .all-devices-list {
    position: absolute;
    bottom: 0;
    top: 120px;
  }

  .room-edit .all-devices-list .mu-avatar {
    background-color: #fff;
  }
</style>
