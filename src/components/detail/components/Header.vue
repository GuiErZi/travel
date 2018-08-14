<template>
  <div>
    <div class="header-fixed">
        <router-link to="/" tag="div">
          <span class="iconfont icon-back">&#xe604;</span>
        </router-link>
        <h1 class="title">上海迪士尼乐园</h1>
      </div>
  </div>
</template>

<script>
export default {
  name: 'detailHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
 .header-fixed
    height .88rem
    line-height .88rem
    overflow hidden
    color #fff
    background $bgColor
    text-align center
    font-size .32rem
    position fixed
    left 0px
    top 0px
    width 100%
    z-index 100
    .icon-back
      position absolute
      left .2rem
      font-size .36rem
      color #fff
</style>
