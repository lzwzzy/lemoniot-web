<template>
  <div class="device-list">
    <mu-text-field hintText="电话号码" type="number" icon="phone"/><br/>
  </div>

</template>

<script>
  export default {
    name: "new-device-list",
    beforeCreate() {
      this.$store.dispatch('changeNavState', false)
    }
  }
</script>

<style scoped>
.device-list{
  bottom: 0;
}
</style>
