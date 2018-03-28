<template>
<div >
  <mu-paper class="content">
    各个组件
  </mu-paper>
  <mu-paper class="bottom">
    <mu-bottom-nav :value="bottomNav"  @change="handleChange">
      <mu-bottom-nav-item value="home" title="家" icon="ondemand_video"/>
      <mu-bottom-nav-item value="store" title="商城" icon="music_note"/>
      <mu-bottom-nav-item value="intelligence" title="智能" icon="books"/>
      <mu-bottom-nav-item value="mine" title="我的" icon="photo"/>
    </mu-bottom-nav>
  </mu-paper>

</div>
</template>

<script>
export default {
  data () {
    return {
      bottomNav: 'movies',
      bottomNavColor: 'movies'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    }
  }
}
</script>
<style scoped>
.content{
  height: 100%;
  position: absolute;
  bottom: 56px;
  right: 0;
  left: 0;
  text-align: center;
  background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522238329557&di=4912b35d2818fb2035a16b6687059477&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F2cf5e0fe9925bc31a218a4e952df8db1cb13707e.jpg")
}
.bottom{
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>
