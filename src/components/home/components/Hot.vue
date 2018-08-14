<template>
  <div>
    <div class="recommend-title"><span class="iconfont icon">&#xe644;</span>本周热门榜单</div>
    <ul class="scroll">
      <li class="item border-bottom" v-for="item of hotCities" :key="item.id">
          <img :src="item.imgUrl" alt="" class="item-img">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc"><span class="iconfont desc">&#xe648;</span><span class="desc">{{item.much}}</span>起</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'homeHot',
  props: {
    hotCities: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
  .recommend-title
    line-height: .8rem
    background: #eee
    text-indent .2rem
    margin-top .2rem
    font-size 13px
    .icon
      color #FF7548
      font-weight bold
      margin-right .1rem
  .scroll
    overflow-x scroll
    white-space nowrap
    margin .2rem
    .item
      width 2rem
      height 3.2rem
      margin-right .2rem
      display inline-block
      .item-img
        width 100%
      .item-info
        margin-top .05rem
        .item-title
          font-size .24rem
          text-align center
          color rgb(33,33,33)
        .item-desc
          font-size .28rem
          text-align center
          margin-top .15rem
          .desc
            color: #ff8300;
</style>
