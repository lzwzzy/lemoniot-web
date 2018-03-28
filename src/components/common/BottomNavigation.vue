<template>
  <mu-paper>
    <mu-bottom-nav :value="bottomNav"  @change="handleChange">
      <mu-bottom-nav-item value="home" title="家" icon="home"/>
      <mu-bottom-nav-item value="store" title="商城" icon="store"/>
      <mu-bottom-nav-item value="intelligence" title="智能" icon="books"/>
      <mu-bottom-nav-item value="mine" title="我的" icon="perm_identity"/>
    </mu-bottom-nav>
  </mu-paper>
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
</style>
