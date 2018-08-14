<template>
<div class="header">
  <div class="header-left">
    <span class="iconfont">&#xe625;</span>
  </div>
  <div class="header-input">
    <span class="iconfont search-icon">&#xe63a;</span>输入城市/景点
  </div>
  <router-link to="/city">
  <div class="header-right">
    {{this.$store.state.city}}<span class="iconfont arrow-icon">&#xe64a;</span>
  </div>
</router-link>
</div>
</template>

<script>
export default {
  name: 'homeHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
  .header
    line-height: .86rem
    display: flex
    background: $bgColor
    color: #fff
    font-size: 13px
    .header-left
      width: .64rem
      text-align: center
      float: left
    .header-input
      flex: 1
      background: #fff
      color: #aaa
      border-radius: .1rem
      margin-top: .12rem
      height: .64rem
      line-height: .64rem
      margin-left: .2rem
      padding-left: .2rem
      .search-icon
        margin-right: .1rem
    .header-right
      flex: 1
      float: right
      text-align: center
      font-size: 15px
      color #fff
      padding 0 0.1rem
      .arrow-icon
        font-size: 12px
        margin-left: .1rem
</style>
