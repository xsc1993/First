<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {}
  }
}
</script>
<style scoped>
.mint-swipe {
  height: 200px;
}
.mint-swipe-item:nth-child(1) {
  background-color: aqua;
}
.mint-swipe-item:nth-child(2) {
  background-color: chartreuse;
}
.mint-swipe-item:nth-child(3) {
  background-color:coral;
}
</style>
