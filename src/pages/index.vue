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
    await this.updatePageView(to.path)
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
        const keywords = ["home", "404"]
        const keys = Object.keys(obj).filter(x => !keywords.includes(x)) 
        const butts = []
        for(const key of keys) {
          const butt = {
            key,
            type: ""
          }
          if(typeof(obj[key]) === "string") {
            butt.type = "file"
          } else {
            butt.type = "dir"
          }
          butts.push(butt)
        }
        this.$store.commit("updatePages", butts)
      }
    },
    async updatePageView(value) {
      const path = value || this.$route.path
      const paths = path.split("/")
      let obj = undefined
      for(const key of paths) {
       if(key == "") {
         if(obj === undefined) {
          obj = this.$pages
         }
        } else {
          if(obj[key] !== undefined) {
            obj = obj[key]
          }
        }
      }
      let destination = this.$pages["404"] 
      if(typeof(obj) == "string") {
        destination = obj
      } else {
        if(obj.home !== undefined) {
          destination = obj.home
        }
      }
      const res = await fetch(destination)
      const data = await res.text()
      this.htmlMD = parse(data)
    }
  }
}
</script>

