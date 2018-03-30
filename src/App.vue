<template>
  <div id="app">
    <router-view></router-view>
    <bottom-navigation class="app-bottom-nav"></bottom-navigation>
  </div>
</template>

<script>
  import bottomNavigation from '@/components/common/BottomNavigation'

  export default {
    name: 'App',
    components: {
      'bottom-navigation': bottomNavigation,
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    margin-top: 60px;
  }
  .app-bottom-nav .mu-bottom-nav-shift-wrapper {
    display: flex;
    justify-content: space-around;
  }

  .app-bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }

</style>
