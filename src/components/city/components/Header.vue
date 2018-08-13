<template>
  <div class="container">
    <div class="header">
      <router-link to="/">
      <span class="iconfont icon-back">&#xe604;</span>
    </router-link>
      <h1 class="title">城市选择</h1>
    </div>
    <div class="area">
      <ul class="btns">
        <li class="btn active">境内</li>
        <li class="btn">境外·港澳台</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .header
    height .6rem
    line-height .6rem
    overflow hidden
    color #fff
    background $bgColor
    text-align center
    font-size .32rem
    position relative
    padding-top .1rem
    .icon-back
      position absolute
      left .2rem
      font-size .36rem
      color #fff
  .area
    height .4rem
    line-height .4rem
    padding .2rem 1rem
    background $bgColor
    text-align center
    font-size 0
    .btns
      border-radius .03rem
      border 1px solid #fff
      display block
      height 100%
      .btn
        border none
        font-size .28rem
        width 50%
        float left
        color #fff
      .active
        background #fff
        color $bgColor
</style>
