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
    <mu-list-item title="Mike Li">
      <mu-avatar src="../assets/chazuo.png" slot="leftAvatar"/>
      <mu-icon value="chat_bubble" slot="right"/>
    </mu-list-item>
    <mu-list-item title="Maco Mai">
      <mu-avatar src="/images/avatar2.jpg" slot="leftAvatar"/>
      <mu-icon value="chat_bubble" slot="right"/>
    </mu-list-item>
    <mu-list-item title="Alex Qin">
      <mu-avatar src="/images/avatar3.jpg" slot="leftAvatar"/>
      <mu-icon value="chat_bubble" slot="right"/>
    </mu-list-item>
    <mu-list-item title="Allen Qun">
      <mu-avatar src="/images/avatar4.jpg" slot="leftAvatar"/>
      <mu-icon value="chat_bubble" slot="right"/>
    </mu-list-item>
    <mu-list-item title="Myron Liu">
      <mu-avatar src="/images/uicon.jpg" slot="leftAvatar"/>
      <mu-icon value="chat_bubble" slot="right"/>
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
.device-list .device-item {
  height: 150px;
}
</style>
