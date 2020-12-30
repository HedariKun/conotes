<template lang="pug">
  h1 hello from 
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.path)
  }
}
</script>

