<template>
  <div>
    <!-- Header -->
    <mt-header fixed title="固定在顶部"></mt-header>
    <!-- 路由出口 -->
    <router-view/>
    <!-- Tabbar -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="外卖">
        <mt-cell v-for="n in 30" title="tab-container 1"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="订单">
        <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="发现">
        <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="我的">
        <mt-cell v-for="n in 12" title="tab-container 4"></mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="外卖">
        <img slot="icon" src="./logo.png">
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src="./logo.png">
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="./logo.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="./logo.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  name: 'Layout',
  data () {
    return {
      selected: '外卖'
    }
  }
}
</script>
<style scoped>
</style>
