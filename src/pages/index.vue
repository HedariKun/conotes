<template lang="pug">
  div(v-html="htmlMD")
</template>

<script>
import { parse } from "../markdownParser"
export default {
  data: () => ({
    htmlMD: ""
  }),
  async mounted() {
    await this.updatePageView()
    await this.setPages()
  },
  async beforeRouteUpdate(to, from, next) {
    await this.updatePageView()
    await this.setPages(to.path)
    next()
  },
  methods: {
    async setPages(value) {
      const path = value || this.$route.path
      const paths = path.split("/")
      let obj = undefined
      for(const key of paths) {
        if(key != "") {
          if(obj  === undefined) {
            obj = this.$pages[key]
          } else {
            obj = obj[key]
          }
        }
      }
      if(obj === undefined) {
        obj = this.$pages
      }
      if(typeof(obj) === "string") {
      } else {
        let keys = Object.keys(obj)
        keys = keys.filter(x => x != "home") 
        this.$store.commit("updatePages", keys)
      }
    },
    async updatePageView() {
      const res = await fetch(this.$pages.home)
      const data = await res.text()
      this.htmlMD = parse(data)
    }
  }
}
</script>

