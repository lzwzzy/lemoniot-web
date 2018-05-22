<template>
  <div class="gateway">
    <mu-appbar title="多功能网关">
      <mu-icon-menu icon="more_vert" slot="right">
        <mu-menu-item title="菜单 1"/>
        <mu-menu-item title="菜单 2"/>
        <mu-menu-item title="菜单 3"/>
        <mu-menu-item title="菜单 4"/>
        <mu-menu-item title="菜单 5"/>
      </mu-icon-menu>
    </mu-appbar>
    <mu-list>
      <mu-list-item disabled title="通知与信息设置"/>
    </mu-list>
    <mu-divider/>
    <mu-list>
      <mu-sub-header>警戒模式设置</mu-sub-header>
      <mu-list-item disableRipple title="警戒模式">
        <mu-switch v-model="warn" slot="right" @input="switchChange"/>
      </mu-list-item>
    </mu-list>
    <mu-list>
      <mu-sub-header>网关颜色设置</mu-sub-header>
      <mu-list-item disableRipple title="颜色">
        <mu-select-field v-model="color" :labelFocusClass="['label-foucs']" label="选择你要设置的颜色" @input="switchChange">
          <mu-menu-item v-for="(mColor,index) in list" :key="index" :value="mColor.value" :title="mColor.name"/>
        </mu-select-field>
      </mu-list-item>
    </mu-list>
  </div>
</template>

<script>
  export default {
    name: "gateway",
    data() {
      return {
        warn: false,
        color: 'red',
        list: [
          {
            name: '红',
            value: 'red'
          },
          {
            name: '橙',
            value: 'orange'
          },
          {
            name: '绿',
            value: 'green'
          }
        ]
      }
    },
    methods: {
      switchChange(value) {
        let params = {
          deviceId: this.$route.query.deviceId,
          event: {
            warn: this.warn,
            color: this.color
          }
        }
        this.$http.gatewayEvent(params).then(resp => {
          console.log(resp)
        }, error => {

        })
      }
    }
  }
</script>

<style scoped>

</style>
