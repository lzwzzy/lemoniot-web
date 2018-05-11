<template>
  <mu-paper>
    <mu-bottom-nav :value="bottomNav"  @change="handleChange">
      <mu-bottom-nav-item to="/home" value="home" title="家" icon="home"/>
      <mu-bottom-nav-item value="store" title="商城" icon="store"/>
      <mu-bottom-nav-item value="intelligence" title="智能" icon="books"/>
      <mu-bottom-nav-item to="/user" value="user" title="我的" icon="perm_identity"/>
    </mu-bottom-nav>
  </mu-paper>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  computed: {
    bottomNav: {
      get() {
        //通过计算属性确定当前active值
        return this.$route.path.split('/')[1]
      }
    }
  },
  methods: {
    handleChange (val) {
      this.$store.dispatch('changeNavState', true)
    }
  }
}
</script>
<style scoped>
</style>
