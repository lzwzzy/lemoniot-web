<template>
  <div class="device-list">
      <!-- <mu-flexbox class="mt8">
        <mu-flexbox-item class="flex-demo">
          <mu-paper class="device-item" :zDepth="2" />
        </mu-flexbox-item>
        <mu-flexbox-item class="flex-demo">
          <mu-paper class="device-item" :zDepth="2" />
        </mu-flexbox-item>
      </mu-flexbox> -->
      <mu-list>
    <mu-sub-header>添加新设备</mu-sub-header>
    <mu-list-item title="柠檬网关">
      <mu-avatar src="./static/image/wangguan.png" slot="leftAvatar"/>
    </mu-list-item>
    <mu-list-item title="柠檬开关">
      <mu-avatar src="./static/image/chazuo.png" slot="leftAvatar"/>
    </mu-list-item>
    <mu-list-item title="柠檬温湿度计">
      <mu-avatar src="./static/image/wenshidu.png" slot="leftAvatar"/>
    </mu-list-item>
  </mu-list>
  </div>

</template>

<script>
export default {
  name: "new-device-list",
  beforeCreate() {
    this.$store.dispatch("changeNavState", false);
  }
};
</script>

<style scoped>
.device-list {
  bottom: 0;
}
.device-list .mu-avatar {
  background-color: #fff;
}
.device-list .device-item {
  height: 150px;
}
</style>
