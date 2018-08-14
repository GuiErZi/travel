<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <router-link :to="'/detail/' + item.id" class="item border-bottom" v-for="item of recommendLists" :key="item.id">
          <img :src="item.imgUrl" alt="" class="item-img">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'homeRecommend',
  props: {
    recommendLists: Array
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
  .item
    display flex
    height 1.9rem
    overflow hidden
    .item-img
      width: 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      font-size 14px
      min-width 0
      padding .1rem
      .item-title
        line-height .54rem
        font-size .32rem
        color #212121
        elli()
      .item-desc
        line-height .5rem
        color #616161
      .item-button
        background #ff9300
        padding 0 .2rem
        margin-top .1rem
        line-height .4rem
        color #fff
        border-radius .06rem
        border: none
</style>
