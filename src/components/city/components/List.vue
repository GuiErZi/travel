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
    <div class="area">
      <h2 class="title first">A</h2>
      <div class="city-wrapper">
        <li class="city" v-for="city of cities" v-bind:key="city.id">
          {{city.name}}
        </li>
      </div>
    </div>
    <div class="area">
      <h2 class="title first">A</h2>
      <div class="city-wrapper">
        <li class="city" v-for="city of cities" v-bind:key="city.id">
          {{city.name}}
        </li>
      </div>
    </div>
    <div class="area">
      <h2 class="title first">A</h2>
      <div class="city-wrapper">
        <li class="city" v-for="city of cities" v-bind:key="city.id">
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
  data () {
    return {
      hotCities: [
        {
          id: '0001',
          name: '北京'
        },
        {
          id: '0002',
          name: '上海'
        },
        {
          id: '0003',
          name: '三亚'
        },
        {
          id: '0004',
          name: '香港'
        },
        {
          id: '0005',
          name: '杭州'
        },
        {
          id: '0006',
          name: '广州'
        },
        {
          id: '0007',
          name: '成都'
        },
        {
          id: '0008',
          name: '深圳'
        },
        {
          id: '0009',
          name: '苏州'
        }
      ],
      cities: [
        {
          id: '0001',
          name: '北京'
        },
        {
          id: '0002',
          name: '上海'
        },
        {
          id: '0003',
          name: '三亚'
        },
        {
          id: '0004',
          name: '香港'
        },
        {
          id: '0005',
          name: '杭州'
        },
        {
          id: '0006',
          name: '广州'
        },
        {
          id: '0007',
          name: '成都'
        },
        {
          id: '0008',
          name: '深圳'
        },
        {
          id: '0009',
          name: '苏州'
        }
      ]
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
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
