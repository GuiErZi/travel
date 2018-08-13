<template>
  <div class="list" ref="wrapper">
    <div class="wrapper">
    <div class="area">
      <h2 class="title">当前城市</h2>
      <div class="city-wrapper">
        <li class="city active">
          北京
        </li>
      </div>
    </div>
    <div class="area">
      <h2 class="title">热门城市</h2>
      <div class="city-wrapper">
        <li class="city" v-for="city of hotCities" v-bind:key="city.id">
          {{city.name}}
        </li>
      </div>
    </div>
    <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
      <h2 class="title first">{{key}}</h2>
      <div class="city-wrapper">
        <li class="city" v-for="city of item" v-bind:key="city.id">
          {{city.name}}
        </li>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'cityList',
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      if (this.letter) {
        const refs = this.$refs[this.letter][0]
        this.scroll.scrollToElement(refs)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .list
    font-size .24rem
    position absolute
    left 0px
    right 0px
    bottom 0px
    top 2.24rem
    overflow hidden
    .title
      background #F5F5F5
      padding .24rem .3rem
    .first
      position relative
      top -0.02rem
    .city-wrapper
      width 100%
      box-sizing border-box
      font-size 0
      .city
        width 33.3%
        font-size .28rem
        height .9rem
        line-height .9rem
        display inline-block
        text-align center
        border-bottom .02rem solid #ddd
        border-right .02rem solid #ddd
        box-sizing border-box
      .active
        background $bgColor
        color #fff
        margin .24rem .3rem
</style>
