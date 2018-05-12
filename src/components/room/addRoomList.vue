<template>
  <div class="new-room-list">
      <mu-list>
        <mu-sub-header>选择一个你要创建的房间</mu-sub-header>
        <mu-list-item title="客厅">
          <mu-avatar src="../static/image/keting.png" slot="leftAvatar"/>
          <mu-icon value="chevron_right" slot="right"/>
        </mu-list-item>
        <mu-list-item title="卧室">
          <mu-avatar src="../static/image/woshi.png" slot="leftAvatar"/>
          <mu-icon value="chevron_right" slot="right"/>
        </mu-list-item>
        <mu-list-item title="餐厅">
          <mu-avatar src="../static/image/chanting.png" slot="leftAvatar"/>
          <mu-icon value="chevron_right" slot="right"/>
        </mu-list-item>
        <mu-list-item title="厨房">
          <mu-avatar src="../static/image/chufang.png" slot="leftAvatar"/>
          <mu-icon value="chevron_right" slot="right"/>
        </mu-list-item>
      </mu-list>
  </div>
</template>

<script>
  export default {
    name: "add-room-list",
    beforeCreate() {
      this.$store.dispatch("changeNavState", false);
    }
  }
</script>

<style scoped>

  .new-room-list .mu-avatar {
    background-color: #fff;
  }
  .new-room-list .mu-avatar img{
    border-radius: 20%;
  }
</style>
