<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of weekendLists" :key="item.id">
        <div class="img-wrapper">
         <img :src="item.imgUrl" alt="" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'homeWeekend',
  props: {
    weekendLists: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
  .recommend-title
    line-height: .8rem
    background: #eee
    text-indent .2rem
    font-size .28rem
  .item
    display block
    .img-wrapper
      height 0
      padding-bottom 37.2%
      overflow hidden
      .item-img
        width: 100%
    .item-info
      min-width 0
      padding .2rem 0
      text-indent .2rem
      .item-title
        line-height .54rem
        font-size .28rem
        elli()
      .item-desc
        line-height .5rem
        color #616161
        font-size .24rem
</style>
