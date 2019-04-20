<template>
  <div class="app">
    <!-- Header -->
    <mt-header fixed title="mint-ui练习"></mt-header>
    <!-- 路由出口 -->
    <router-view/>
    <!-- Tabbar -->
    <mt-tabbar fixed>
      <mt-tab-item id="首页">
        <router-link to="/" class="public">
          <div class="iconfont icon-shouye-"></div>
          首页
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="会员">
        <router-link to="/member" class="public">
          <div class="iconfont icon-huiyuan"></div>
          会员
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="购物车">
        <router-link to="/cart" class="public">
          <div class="iconfont icon-gouwuchekong"></div>
          购物车
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="搜索">
        <router-link to="/search" class="public">
          <div class="iconfont icon-sousuo"></div>
          搜索
        </router-link>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
    }
  }
}
</script>
<style scoped>
.app {
  padding-top: 40px;
}
.public {
  color: #000;
  text-decoration: none;
  display: block;
  height: 100%;
}
.iconfont {
  font-size: 28px;
}
</style>
