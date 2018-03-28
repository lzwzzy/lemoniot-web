<template>
  <div class="app-home">
    <div class="app-header">

    </div>
    <mu-row class="app-content" gutter>
      <mu-col width="20" tablet="50" desktop="100">
        <mu-paper class="room-list" :zDepth="2">

        </mu-paper>
      </mu-col>
      <mu-col width="80" tablet="50" desktop="100">col-100<br/>tablet-50<br/>desktop-33</mu-col>
    </mu-row>
  </div>
</template>

<script>
  export default {
    name: "home"
  }
</script>

<style scoped>
  .app-home {
    position: absolute;
    bottom: 56px;
    top: 0;
    width: 100%;
    padding: 10px;
  }
  .app-home .app-header {
    height: 15%
  }
  .app-home .app-content {
    height: 85%;
  }
  .app-home .app-content .col {
    height: 100%;
  }
  .app-home .app-content .room-list {
    height: 100%;
  }
  .app-home .app-content .room-list .room-item {
    font-size: 18px;
    padding: 6px;
  }
  .icon-item-word {
    border-bottom: solid 1px gray ;
    font-size: 15px;
    padding: 4px;
  }
</style>

