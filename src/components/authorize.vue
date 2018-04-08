<template>

</template>

<script>
  import { wxLogin } from "../common";

  export default {
        name: "authorize",
      beforeCreate() {
          wxLogin(this.$route.query.visit)
      }
    }
</script>

<style scoped>

</style>
