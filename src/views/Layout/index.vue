<template>
  <div>
    <!-- Header -->
    <mt-header fixed title="mint-ui练习"></mt-header>
    <!-- 路由出口 -->
    <router-view/>
    <!-- Tabbar -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="首页">
        <mt-cell v-for="n in 30" title="tab-container 1"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="会员">
        <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="购物车">
        <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="搜索">
        <mt-cell v-for="n in 12" title="tab-container 4"></mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="首页">
        <!-- <img slot="icon" src="./logo.png"> -->
        <div class="iconfont icon-shouye-"></div>
        首页
      </mt-tab-item>
      <mt-tab-item id="会员">
        <div class="iconfont icon-huiyuan"></div>
        会员
      </mt-tab-item>
      <mt-tab-item id="购物车">
        <div class="iconfont icon-gouwuchekong"></div>
        购物车
      </mt-tab-item>
      <mt-tab-item id="搜索">
        <div class="iconfont icon-sousuo"></div>
        搜索
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  name: 'Layout',
  data () {
    return {
      selected: '首页'
    }
  }
}
</script>
<style scoped>
.iconfont {
  font-size: 28px;
}
</style>
