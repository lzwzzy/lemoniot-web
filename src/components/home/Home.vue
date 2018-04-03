<template>
  <div class="app-home">
    <div class="app-header">
      <div class="tool-item">
        <mu-flexbox class="mt8">
          <mu-flexbox-item class="home-name">
            <span class="word">刘志伟的家</span>
            <mu-icon class="tool-icon" value="keyboard_arrow_right"/>
          </mu-flexbox-item>
          <mu-flexbox-item class="add-device-button">
            <mu-icon class="tool-icon" value="developer_board"/>
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
              <mu-icon value="home"/>
              <div class="icon-item-word">常用</div>
            </div>
            <div class="boundary"></div>

            <div class="icon-item">
              <mu-icon value="home"/>
              <div class="icon-item-word">默认房间</div>
            </div>
          </mu-paper>
        </mu-col>
        <mu-col width="80" tablet="50" desktop="90">
          <mu-paper class="room-detail" :zDepth="2" rounded>
            <div class="header">
              <span class="title">卧室</span>
              <span class="device-count">1个设备</span>
            </div>
            <div class="device-list">

              <mu-list>
                <mu-list-item title="柠檬wifi" class="device-item">
                  <mu-avatar src="" slot="leftAvatar"/>
                  <span slot="describe">
                    设备在线
                  </span>
                  <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
                    <mu-menu-item title="共享"/>
                    <mu-menu-item title="删除"/>
                  </mu-icon-menu>
                </mu-list-item>
                <mu-divider inset/>
                <mu-list-item title="空调">
                  <mu-avatar src="" slot="leftAvatar"/>
                  <span slot="describe">
                    设备在线
                  </span>
                  <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
                    <mu-menu-item title="共享"/>
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
    name: "home"
  }
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
    background-color: rgb(22,22,80);
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
    font-size: 50px;
  }

  .app-home .app-content .common-info .row-1 .temperature .unit {
    position: relative;
    left: -12px;
  }

  .app-home .app-content .common-info .row-1 .locale {
    display: inline-block;
    font-size: 10px;
  }

  .app-home .app-content .common-info .row-2 {
    position: relative;
    top: -16px;
  }

  .app-home .app-content .row {
    height: calc(100% - 88px);
  }

  .app-home .app-content .col {
    height: 100%;
  }

  .app-home .app-content .room-list {
    height: 100%;
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

  .app-home .app-content .room-detail .device-list .device-item {

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

  .icon-item {
    cursor: pointer;
    transition: transform 150ms ease-out;
    position: relative;
    padding: 10px;
    font-size: 14px;
    text-align: center;
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

