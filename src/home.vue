<template lang="pug">
	h1 hello world
    div(v-html="htmlD")
</template>

<script>
  import {parse } from "./markdownParser"
export default {
  data: () => ({
    htmlD: parse("# hello world \n **bold text** ~~text with strike~~ __underlined text__ ")
  }),
  computed: {
    show() {
      return parse("# hello world")
    }
  }
}
</script>
