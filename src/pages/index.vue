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
    const res = await fetch(this.$pages.home)
    const data = await res.text()
    this.htmlMD = parse(data)
  }
}
</script>

