<template lang="pug">
  #side-bar
    #top
      h2 Co-Notes
    #panel
      router-link.nav-butt(to="../") ..
      router-link.nav-butt(v-for="x in getPages" :to="`${x}/`") {{ x }}
</template>

<script>
export default {
  data: () => ({ pages: []}),
  computed: {
    getPages() {
      return this.$store.state.pages
    }
  }
}
</script>

<style lang="scss" scoped>
#side-bar {
  width: 250px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  display: inline-block;
  background-color: #8080ff;
  #top {
    padding: 10px 20px;
    text-align: center;
  }
  #panel {
    .nav-butt {
      padding: 5px 10px;
      display: block;
      font-size: 20px;
      color: black;
      text-decoration: none;
    }
    .nav-butt:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
