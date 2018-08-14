<template>
  <div>
    <div class="wrapper">
      <img src="//img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_600x330_8572a930.jpg" class="img">
      <router-link to="/">
        <span class="iconfont go-home">&#xe604;</span>
      </router-link>
      <p class="pictures"><span class="iconfont pictures-review">&#xe627;</span><span class="num">15</span></p>
      <h2 class="title">上海迪士尼乐园</h2>
      <div class="gradient"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailBanner'
}
</script>

<style lang="stylus" scoped>
  .wrapper
    font-size .24rem
    width 100%
    overflow hidden
    height 0
    padding-bottom 55%
    background #f00
    position relative
    .img
      width 100%
    .go-home
      font-size .5rem
      padding .1rem
      border-radius 50%
      background rgba(0,0,0,.5)
      color #fff
      font-weight bold
      position absolute
      left .1rem
      top .1rem
    .pictures
      position absolute
      left .1rem
      bottom .86rem
      font-size .24rem
      color #fff
      width 1.2rem
      height .4rem
      line-height .4rem
      background rgba(0,0,0,.5)
      border-radius .2rem
      text-align center
      .pictures-review
        font-size .2rem
        margin-right .1rem
    .title
      font-size .36rem
      position absolute
      left .1rem
      bottom .4rem
      color #fff
    .gradient
      background linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.8))
      width 100%
      min-height .6rem
      position absolute
      left 0px
      bottom 0
</style>
