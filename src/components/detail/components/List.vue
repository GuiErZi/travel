<template>
  <div>
    <div class="item" v-for="(item, key) of list" :key="key">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div class="item-childs" v-if="item.children">
        <!-- <detail-list :list="item.children"></detail-list> -->
        <div class="item-child border-bottom"  v-for="child of item.children" :key="child.id">
          <div class="title">{{child.title}}</div>
          <div class="prices">
            <span class="iconfont money">&#xe648;</span><span class="price">{{child.price}}</span>起
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .item-title
    line-height .8rem
    font-size .32rem
    padding 0 .1rem
    .item-title-icon
      display: inline-block
      width: .36rem
      height: .36rem
      position: relative
      top .06rem
      left .06rem
      background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
      margin-right: .1rem
      background-size: .4rem 3rem
  .item-childs
    font-size 0
    .item-child
      padding .24rem .3rem
      font-size 0
      display flex
      .title
        flex 1
        font-size .3rem
        line-height .48rem
        color #333
      .prices
        min-width 2rem
        font-size .24rem
        color #9e9e9e
        text-align center
        .money
          font-size .2rem
          color #ff9800
        .price
          font-size .4rem
          color #ff9800
          margin-right .02rem
</style>
