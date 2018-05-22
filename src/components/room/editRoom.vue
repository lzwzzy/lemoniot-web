<template>
  <div class="room-edit">
    <mu-appbar title="房间设置">
      <mu-flat-button color="white" label="保存" slot="right" @click="saveRoom"/>
    </mu-appbar>
    <mu-list class="room-edit-item-list">
      <mu-list-item title="房间名称" @click="openEditRoomNameDialog()">
        <mu-icon slot="rightAvatar" value="chevron_right"/>
        <span slot="after">{{room.name}}</span>
      </mu-list-item>
      <mu-list-item title="房间图标">
        <mu-icon slot="right" value="chevron_right"/>
      </mu-list-item>
    </mu-list>
    <mu-divider/>
    <mu-list class="all-devices-list">
      <mu-sub-header>{{userInfo.name}}的家</mu-sub-header>
      <mu-list-item class="device-item" :title="device.name" disableRipple v-for="(device, index) in devices" :key="index">
        <mu-avatar src="../../static/image/wangguan.png" slot="leftAvatar"/>
        <mu-checkbox :nativeValue="device" v-model="room.devices" slot="right"/>
        <span slot="describe" :class="{'not-this-room': !room.devices.map(d => d.deviceId).includes(device.deviceId)}" >
          {{room.devices.map(d => d.deviceId).includes(device.deviceId) ? '已选中' : '[' + rooms.map(r => {
            return r.devices.map(d => { 
              if(d.deviceId == device.deviceId){
                return r.name
              }
            })
          }) + ']'}}
        </span>
      </mu-list-item>
    </mu-list>
    <mu-dialog :open="editRoomNameDialog" title="修改房间名称" @close="closeEditRoomNameDialog()">
    <mu-text-field v-model="room.name"/>
    <mu-flat-button slot="actions" @click="closeEditRoomNameDialog()" primary label="取消"/>
    <mu-flat-button slot="actions" primary @click="editRoomName()" label="确定"/>
  </mu-dialog>
  </div>
</template>

<script>
export default {
  name: "edit-room",
  data() {
    return {
      room: {
        roomId: "",
        name: "",
        devices: []
      },
      myRoomName: '',
      myDevices: [],
      editRoomNameDialog: false,
      deviceSelected: false
    };
  },
  computed: {
  },
  beforeCreate() {
    this.$store.dispatch("changeNavState", false);
  },
  mounted() {
    this.$http.getRoom(this.$route.params.id).then(
      res => {
        if (res.room != null) {
          this.room = res.room;
          console.log(this.room);
        }
      },
      error => {}
    );
  },
  methods: {
    saveRoom() {
      this.room.user = this.userInfo
      this.$http.saveRoom(this.room).then(
        res => {
          this.back();
        },
        error => {}
      );
    },
    openEditRoomNameDialog(){
      this.editRoomNameDialog = true
      this.myRoomName = this.room.name;
    },
    closeEditRoomNameDialog(){
      this.editRoomNameDialog = false
      this.room = this.myRoomName;
    },
    editRoomName() {
      this.editRoomNameDialog = false;
    }
  }
};
</script>

<style scoped>
.room-edit {
  bottom: 0;
}

.room-edit .all-devices-list .device-item .not-this-room {
  color: chocolate;
}

.room-edit .all-devices-list .mu-avatar {
  background-color: #fff;
}
</style>
