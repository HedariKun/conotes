<template lang="pug">
  #main-body
    router-view
</template>

<style lang="scss" scoped>
#main-body {
  width: calc(100% - 250px);
  padding: 20px 40px;
  box-sizing: border-box;
  max-width: 850px;
  height: 100%;
  margin-left: 250px;
  background-color: #fafafa;
  display: inline-block;
}
</style>
