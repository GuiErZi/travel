<template>
<div class="header">
  <div class="header-left">
    <span class="iconfont">&#xe625;</span>
  </div>
  <div class="header-input">
    <span class="iconfont search-icon">&#xe63a;</span>输入城市/景点
  </div>
  <div class="header-right">
    {{city}}<span class="iconfont arrow-icon">&#xe64a;</span>
  </div>
</div>
</template>

<script>
export default {
  name: 'homeHeader',
  props: ['city']
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
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
      width: 1.24rem
      float: right
      text-align: center
      font-size: 15px
      .arrow-icon
        font-size: 12px
        margin-left: .1rem
</style>
