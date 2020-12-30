<template lang="pug">
  #home
    side-bar
    main-body
</template>

<script>
import {parse } from "./markdownParser"
import SideBar from "./components/side-bar.vue"
import MainBody from "./components/main-body.vue"
export default {
  data: () => ({
  }),
  components: {SideBar, MainBody}
}
</script>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #e8e8e8;
}
</style>
